#!/bin/bash

URL_LIST="./cache/thumbnails.csv"     # TSV (uuid<TAB>url) containing download targets
OUT_DIR="./cache/downloads/thumbnails"     # output directory
MAX_THREADS=32          # maximum parallel downloads
RETRY_COUNT=3           # how many times to retry each file
SLEEP_BASE=2            # base sleep time before retries
FAILED_LOG=$(mktemp)    # temporary file for failed downloads

mkdir -p "$OUT_DIR"

# Function to download a single file
download_file() {
    local num="$1"
    local uuid="$2"
    local url="$3"
    local output_file="$OUT_DIR/$uuid"
    
    # Extract extension from URL (remove query string first, then get extension)
    local url_without_query="${url%%\?*}"
    local extension="${url_without_query##*.}"
    
    # If no extension found, try to detect from Content-Type or default to png
    if [[ -z "$extension" ]] || [[ "$extension" == "$url_without_query" ]]; then
        extension="png"
    fi
    
    output_file="$output_file.$extension"
    
    # Skip if file already exists
    if [[ -f "$output_file" ]]; then
        echo "[$num/$total] Skipping $uuid (already exists)"
        return 0
    fi
    
    # Download with retries
    local attempt=1
    while [[ $attempt -le $RETRY_COUNT ]]; do
        if curl -sSfL -o "$output_file" "$url" 2>/dev/null; then
            echo "[$num/$total] Downloaded: $uuid.$extension"
            return 0
        fi
        
        if [[ $attempt -lt $RETRY_COUNT ]]; then
            sleep $((SLEEP_BASE * attempt))
        fi
        ((attempt++))
    done
    
    echo "Failed: $uuid" >> "$FAILED_LOG"
    echo "[$num/$total] Failed to download: $uuid"
    return 1
}

# Export function for parallel execution
export -f download_file
export OUT_DIR RETRY_COUNT SLEEP_BASE FAILED_LOG

# Read CSV and download files in parallel
echo "Starting downloads from $URL_LIST..."
echo "Output directory: $OUT_DIR"
echo "Max parallel downloads: $MAX_THREADS"
echo ""

# Count total files
total=$(wc -l < "$URL_LIST" | tr -d ' ')
export total

# Process each line from CSV
current=0
while IFS=$'\t' read -r uuid url || [[ -n "$uuid" ]]; do
    # Skip empty lines
    [[ -z "$uuid" ]] && continue
    
    ((current++))
    local_num=$current
    
    # Wait if we've reached max threads
    while [[ $(jobs -r | wc -l) -ge $MAX_THREADS ]]; do
        sleep 0.1
    done
    
    # Download in background
    download_file "$local_num" "$uuid" "$url" &
    
done < "$URL_LIST"

# Wait for all background jobs to complete
wait

# Report results
echo ""
echo "Downloads completed!"
if [[ -s "$FAILED_LOG" ]]; then
    failed_count=$(wc -l < "$FAILED_LOG" | tr -d ' ')
    echo "Failed downloads: $failed_count"
    echo "Failed files logged in: $FAILED_LOG"
else
    echo "All downloads successful!"
    rm -f "$FAILED_LOG"
fi
