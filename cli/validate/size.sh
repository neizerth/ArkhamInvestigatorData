#!/bin/sh
set -eu

JSON="./dist/investigators_images.json"
IMG_DIR="./dist/images/jpg/full"

# Check required tools
command -v jq >/dev/null 2>&1 || { echo "jq is not installed"; exit 1; }
command -v identify >/dev/null 2>&1 || { echo "ImageMagick (identify) is not installed"; exit 1; }

# Iterate over JSON entries
jq -c '.[]' "$JSON" | while IFS= read -r entry; do
  id=$(printf '%s' "$entry" | jq -r '.id')
  expected_w=$(printf '%s' "$entry" | jq -r '.width')
  expected_h=$(printf '%s' "$entry" | jq -r '.height')
  file="$IMG_DIR/$id.jpg"

  # Check if the file exists
  if [ ! -f "$file" ]; then
    echo "⚠️ File not found: $file"
    continue
  fi

  # Get actual image size (format: width height)
  size=$(identify -format "%w %h" "$file" 2>/dev/null || true)
  if [ -z "${size:-}" ]; then
    echo "⚠️ Could not read image: $file"
    continue
  fi

  actual_w=$(echo "$size" | awk '{print $1}')
  actual_h=$(echo "$size" | awk '{print $2}')

  # Compare expected vs actual dimensions
  if [ "$expected_w" -ne "$actual_w" ] || [ "$expected_h" -ne "$actual_h" ]; then
    echo "❌ Mismatch: $id.jpg (expected ${expected_w}x${expected_h}, got ${actual_w}x${actual_h})"
  fi
done
