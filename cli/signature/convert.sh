#!/bin/bash
# Usage: sh convert_all.sh 05003

# Check if argument is provided
if [ -z "$1" ]; then
  echo "Error: missing ID (example: sh convert_all.sh 05003)"
  exit 1
fi

ID="$1"

# echo "=== Converting image to grayscale ==="
# sh cli/image/grayscale.sh -f "$ID"

echo "=== Converting to AVIF ==="
sh cli/convert/avif/convert.sh "$ID"

echo "=== Converting to WEBP ==="
sh cli/convert/webp/convert.sh "$ID"

echo "✅ All conversions completed for ID: $ID"
