#!/bin/bash
set -e

CACHE_DIR="./cache/downloads/thumbnails"

AVIF_PROCESS="./cli/convert/avif/_process.sh"
WEBP_PROCESS="./cli/convert/webp/_process.sh"

out_dir="./dist/images"

# Check if cache directory exists
if [[ ! -d "$CACHE_DIR" ]]; then
    echo "Error: Cache directory $CACHE_DIR does not exist"
    exit 1
fi

# Process each file in the cache directory
for infile in "$CACHE_DIR"/*; do
    # Skip if no files found
    [[ ! -f "$infile" ]] && continue
    
    # Get base filename without extension
    filename=$(basename "$infile")
    base_name="${filename%.*}"
    extension="${filename##*.}"
    
    # Skip if already converted
    [[ "$extension" == "avif" ]] && continue
    [[ "$extension" == "webp" ]] && continue
    
    # Generate output filenames
    avif_out="${out_dir}/avif/square/${base_name}.avif"
    webp_out="${out_dir}/webp/square/${base_name}.webp"
    
    # Create output directories
    mkdir -p "${out_dir}/avif/square"
    mkdir -p "${out_dir}/webp/square"
    
    # Convert to AVIF (skip if already exists)
    if [[ ! -f "$avif_out" ]]; then
        echo "Converting to AVIF: $(basename "$infile") -> $(basename "$avif_out")"
        bash "$AVIF_PROCESS" "$infile" "$avif_out"
    else
        echo "Skipping AVIF conversion (already exists): $(basename "$avif_out")"
    fi
    
    # Convert to WebP (skip if already exists)
    if [[ ! -f "$webp_out" ]]; then
        echo "Converting to WebP: $(basename "$infile") -> $(basename "$webp_out")"
        bash "$WEBP_PROCESS" "$infile" "$webp_out"
    else
        echo "Skipping WebP conversion (already exists): $(basename "$webp_out")"
    fi
done

echo "Conversion completed!"
