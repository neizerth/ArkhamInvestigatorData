#!/bin/bash

URL_LIST="./cache/urls.square.txt"     # file containing list of URLs (one per line)
OUT_DIR="./cache/downloads/square"     # output directory
MAX_THREADS=32          # maximum parallel downloads
MIN_THREADS=8           # minimum parallel downloads
RETRY_COUNT=3           # how many times to retry each file
SLEEP_BASE=2            # base sleep time before retries

mkdir -p "$OUT_DIR"

download_file() {
    url="$1"
    filename=$(basename "$url")
    out="$OUT_DIR/$filename"

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

adaptive_parallel() {
    threads=$MAX_THREADS

    while true; do
        echo "→ Trying with $threads threads..."

        # Run downloads in parallel and count failures
        failures=$(cat "$URL_LIST" | \
            xargs -n1 -P"$threads" -I {} bash -c "download_file '{}'" 2>&1 | \
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
