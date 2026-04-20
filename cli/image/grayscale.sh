#!/bin/sh

OVERWRITE=0
if [ "$1" = "-f" ]; then
  OVERWRITE=1
  shift
fi

BASENAME="${1:-*}"
ROOT="./images/source"

IM_CMD="convert"
if command -v magick >/dev/null 2>&1; then
  IM_CMD="magick"
fi

find "$ROOT" -path "$ROOT/grayscale" -prune -o -type f -name "$BASENAME.*" -print | while IFS= read -r src_file; do
  src_name=$(basename "$src_file")
  # Extract the subdirectory path (full, mini, square, etc.)
  subdir=$(echo "$src_file" | sed "s|$ROOT/||" | xargs dirname)
  dst_dir="./images/source/grayscale/$subdir"
  dst_file="$dst_dir/$src_name"

  mkdir -p "$dst_dir"

  if [ "$OVERWRITE" -eq 0 ] && [ -f "$dst_file" ]; then
    echo "Skip (exists): $dst_file"
    continue
  fi

  "$IM_CMD" "$src_file" -colorspace Gray -strip "$dst_file"
  echo "Created: $dst_file"
done
