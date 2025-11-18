#!/bin/bash

URL_LIST="./cache/thumbnails.csv"     # TSV (code<TAB>url) containing download targets
OUT_DIR="./cache/downloads/thumbnails"     # output directory
MAX_THREADS=32          # maximum parallel downloads
MIN_THREADS=8           # minimum parallel downloads
RETRY_COUNT=3           # how many times to retry each file
SLEEP_BASE=2            # base sleep time before retries

mkdir -p "$OUT_DIR"

download_file() {
    record="$1"

    IFS=$'\t' read -r code url <<< "$record"

    if [ -z "$code" ] || [ -z "$url" ]; then
        echo "[WARN] Skipping malformed record: $record"
        return 0
    fi

    # Strip potential carriage returns and extract extension from URL (before query params)
    url="${url%$'\r'}"
    url_no_query="${url%%\?*}"
    extension="${url_no_query##*.}"

    if [ -z "$extension" ] || [ "$extension" = "$url_no_query" ]; then
        extension="bin"
    fi

    out="$OUT_DIR/$code.$extension"

    for ((i=1; i<=RETRY_COUNT; i++)); do
        # -f: fail on HTTP errors
        # -L: follow redirects
        # -s: silent
        # -S: show errors
        # -w: print HTTP status code
        http_code=$(curl -w "%{http_code}" -fSL "$url" -o "$out" -s -S --retry 0)
        exit_code=$?

        if [ "$exit_code" -eq 0 ] && [[ "$http_code" =~ ^2 ]]; then
            echo "[OK] $url"
            return 0
        fi

        echo "[WARN] Attempt $i for $url failed (HTTP $http_code)"
        sleep $((SLEEP_BASE * i))  # exponential backoff
    done

    echo "[FAIL] $url"
    return 1
}

export -f download_file

adaptive_parallel() {
    threads=$MAX_THREADS

    while true; do
        echo "→ Trying with $threads threads..."

        # Run downloads in parallel and count failures
        failures=$(while IFS= read -r line; do
                [ -n "$line" ] && printf '%s\0' "$line"
            done < "$URL_LIST" | \
            xargs -0 -n1 -P"$threads" -I {} bash -c 'download_file "$1"' _ "{}" 2>&1 | \
            tee /dev/stderr | grep -c '\[FAIL\]')

        if [ "$failures" -eq 0 ]; then
            echo "✓ Completed successfully with $threads threads"
            return 0
        fi

        echo "⚠️  Failures detected: $failures"

        # Reduce thread count on failure
        threads=$((threads / 2))

        if [ "$threads" -lt "$MIN_THREADS" ]; then
            echo "❌ Cannot reduce threads further. Exiting."
            return 1
        fi

        echo "↓ Reducing parallelism to $threads and retrying…"
    done
}

adaptive_parallel
