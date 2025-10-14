#!/bin/bash
set -e

# Base directory
base="./dist/images"

# Supported formats and sizes
formats=("avif" "webp")
sizes=("full" "mini" "square")

for fmt in "${formats[@]}"; do
  for size in "${sizes[@]}"; do
    color_src="$base/$fmt/color/$size"
    gray_src="$base/$fmt/grayscale/$size"
    dest="$base/$fmt/$size"
    gray_dest="$dest/grayscale"

    # Move color images if the folder exists
    if [ -d "$color_src" ]; then
      mkdir -p "$base/$fmt"
      mv "$color_src" "$dest"
      echo "Moved: $color_src → $dest"
    fi

    # Move grayscale images if the folder exists
    if [ -d "$gray_src" ]; then
      mkdir -p "$dest"
      mv "$gray_src" "$gray_dest"
      echo "Moved: $gray_src → $gray_dest"
    fi
  done

  # Remove old empty color and grayscale directories
  rmdir -p "$base/$fmt/color" "$base/$fmt/grayscale" 2>/dev/null || true
done

echo "✅ Done!"
