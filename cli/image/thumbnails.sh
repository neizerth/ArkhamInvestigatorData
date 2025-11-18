#!/bin/bash

URL_LIST="./cache/thumbnails.csv"     # TSV (code<TAB>url) containing download targets
OUT_DIR="./cache/downloads/thumbnails"     # output directory
MAX_THREADS=32          # maximum parallel downloads
MIN_THREADS=8           # minimum parallel downloads
RETRY_COUNT=3           # how many times to retry each file
SLEEP_BASE=2            # base sleep time before retries
FAILED_LOG=$(mktemp)    # temporary file for failed downloads

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
    last_http_code="000"
    last_error=""
    CURL_TIMEOUT=30  # timeout in seconds

    for ((i=1; i<=RETRY_COUNT; i++)); do
        # -L: follow redirects
        # -s: silent
        # -S: show errors
        # -w: print HTTP status code and additional info
        # --max-time: timeout
        # --connect-timeout: connection timeout
        # -H: add headers to mimic browser
        # Note: removed -f flag to see actual HTTP codes even on errors
        # Redirect stderr to capture error messages
        curl_output=$(curl -w "\n%{http_code}" -SL "$url" -o "$out" -s -S --retry 0 --max-time "$CURL_TIMEOUT" --connect-timeout 15 --compressed \
            --ipv4 \
            -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36" \
            -H "Accept: image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8" \
            -H "Accept-Language: en-US,en;q=0.9" \
            -H "Referer: https://arkham.build/" \
            -H "Sec-Fetch-Dest: image" \
            -H "Sec-Fetch-Mode: no-cors" \
            -H "Sec-Fetch-Site: cross-site" \
            2>&1)
        exit_code=$?
        
        # Extract HTTP code (last line)
        last_http_code=$(echo "$curl_output" | tail -n1 | tr -d '\n\r')
        # Extract error message (everything except last line)
        error_output=$(echo "$curl_output" | sed '$d')
        
        # Validate HTTP code is numeric
        if ! [[ "$last_http_code" =~ ^[0-9]{3}$ ]]; then
            # If HTTP code is not valid, it might be empty or contain error message
            if [ -z "$last_http_code" ] || [ "$last_http_code" = "" ]; then
                last_http_code="000"
                # If we have error output, use it as the error message
                if [ -n "$error_output" ]; then
                    last_error="$error_output"
                fi
            else
                # HTTP code contains non-numeric data, treat as error
                last_http_code="000"
                if [ -n "$error_output" ]; then
                    last_error="$error_output"
                else
                    last_error="$last_http_code"
                fi
            fi
        elif [ -n "$error_output" ]; then
            # Valid HTTP code, but we have error output (might be warnings)
            last_error="$error_output"
        fi

        # Map curl exit codes to readable errors when HTTP code is 000 or request failed
        if [ "$last_http_code" = "000" ]; then
            # Always set error message when HTTP code is 000
            if [ -z "$last_error" ]; then
                case "$exit_code" in
                    6)  last_error="Could not resolve host" ;;
                    7)  last_error="Failed to connect to host" ;;
                    28) last_error="Operation timeout" ;;
                    35) last_error="SSL connect error" ;;
                    52) last_error="Empty reply from server" ;;
                    56) last_error="Failure in receiving network data" ;;
                    *)  last_error="Connection failed (curl exit: $exit_code)" ;;
                esac
            fi
            # Ensure we always have an error message
            if [ -z "$last_error" ]; then
                last_error="Connection failed"
            fi
        elif [ "$exit_code" -ne 0 ]; then
            # For non-zero exit codes with valid HTTP codes, set error if not already set
            if [ -z "$last_error" ]; then
                case "$exit_code" in
                    6)  last_error="Could not resolve host" ;;
                    7)  last_error="Failed to connect to host" ;;
                    28) last_error="Operation timeout" ;;
                    35) last_error="SSL connect error" ;;
                    52) last_error="Empty reply from server" ;;
                    56) last_error="Failure in receiving network data" ;;
                    *)  last_error="Network error (curl exit: $exit_code)" ;;
                esac
            fi
        fi

        # Check if successful (HTTP 2xx)
        # Use numeric comparison only if last_http_code is numeric
        if [ "$exit_code" -eq 0 ] && [ "$last_http_code" != "000" ] && [ "$last_http_code" -ge 200 ] && [ "$last_http_code" -lt 300 ] 2>/dev/null; then
            echo "[OK] $url"
            return 0
        fi

        # Build error message for warning
        error_msg=""
        if [ -n "$last_error" ]; then
            error_msg=" - $last_error"
        fi
        echo "[WARN] Attempt $i for $url failed (HTTP $last_http_code$error_msg)"
        sleep $((SLEEP_BASE * i))  # exponential backoff
    done

    # Build error message for final failure
    # Ensure we have an error message
    if [ -z "$last_error" ]; then
        last_error="Connection failed"
    fi
    error_msg=" - $last_error"
    echo "[FAIL] $url (HTTP $last_http_code$error_msg)"
    # Clean error message: replace tabs and newlines with spaces, limit length
    clean_error=$(echo "$last_error" | tr '\n\t' ' ' | sed 's/  */ /g' | cut -c1-200)
    echo "$code	$url	$last_http_code	$clean_error" >> "$FAILED_LOG"
    return 1
}

export -f download_file
export FAILED_LOG

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

print_summary() {
    echo ""
    echo "═══════════════════════════════════════════════════════════"
    echo "📊 Итоговая статистика загрузки"
    echo "═══════════════════════════════════════════════════════════"
    
    total=$(wc -l < "$URL_LIST" | tr -d ' ')
    
    # Remove duplicates from failed log and count unique failures
    # Use only first two fields (code and url) for uniqueness
    if [ -f "$FAILED_LOG" ] && [ -s "$FAILED_LOG" ]; then
        FAILED_UNIQUE=$(mktemp)
        # Sort by first two fields and keep only unique entries
        sort -t$'\t' -u -k1,2 "$FAILED_LOG" > "$FAILED_UNIQUE"
        failed_count=$(wc -l < "$FAILED_UNIQUE" | tr -d ' ')
    else
        FAILED_UNIQUE=""
        failed_count=0
    fi
    
    success_count=$((total - failed_count))
    
    echo "Всего файлов:     $total"
    echo "Успешно:          $success_count"
    echo "Неудачно:         $failed_count"
    echo ""
    
    if [ "$failed_count" -gt 0 ] && [ -n "$FAILED_UNIQUE" ]; then
        echo "❌ Список неудачных загрузок:"
        echo "───────────────────────────────────────────────────────────"
        while IFS=$'\t' read -r code url http_code error_msg; do
            echo "  $code (HTTP $http_code)"
            echo "    $url"
            # Show error message if it exists and is meaningful
            if [ -n "$error_msg" ] && [ "$error_msg" != "$http_code" ] && [ -n "${error_msg// }" ]; then
                echo "    Ошибка: $(echo "$error_msg" | cut -c1-100)"
            fi
        done < "$FAILED_UNIQUE"
        echo "───────────────────────────────────────────────────────────"
        rm -f "$FAILED_UNIQUE"
    else
        echo "✓ Все файлы загружены успешно!"
    fi
    
    echo "═══════════════════════════════════════════════════════════"
}

# Cleanup function
cleanup() {
    rm -f "$FAILED_LOG"
}
trap cleanup EXIT

adaptive_parallel
print_summary
