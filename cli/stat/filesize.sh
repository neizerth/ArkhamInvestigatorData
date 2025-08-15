#!/bin/sh

# Source folder with zip files
SRC_DIR="./dist/images"
# Cache folder for JSON output
DATA_DIR="./src/data"
OUTPUT_FILE="$DATA_DIR/assets.json"

# Build JSON array in one line
json="["
first=1
for file in "$SRC_DIR"/*.zip; do
    [ -e "$file" ] || continue

    size=$(stat -c%s "$file" 2>/dev/null || stat -f%z "$file")
    filename=$(basename "$file")

    if [ $first -eq 0 ]; then
        json="$json,"
    fi
    json="$json{\"filename\":\"$filename\",\"size\":$size}"
    first=0
done
json="$json]"

# Format using prettier via npx
echo "$json" | npx prettier --parser json > "$OUTPUT_FILE"
