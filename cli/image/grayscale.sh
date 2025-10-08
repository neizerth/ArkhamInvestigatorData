#!/bin/sh

OVERWRITE=0
if [ "$1" = "-f" ]; then
  OVERWRITE=1
  shift
fi

BASENAME="${1:-*}"
ROOT="./images/jpg/color"

find "$ROOT" -type f -name "$BASENAME.jpg" | while IFS= read -r src_file; do
  src_name=$(basename "$src_file")
  # Extract the subdirectory path (full, mini, square, etc.)
  subdir=$(echo "$src_file" | sed "s|$ROOT/||" | xargs dirname)
  dst_dir="./images/jpg/grayscale/$subdir"
  dst_file="$dst_dir/$src_name"

  mkdir -p "$dst_dir"

  if [ "$OVERWRITE" -eq 0 ] && [ -f "$dst_file" ]; then
    echo "Skip (exists): $dst_file"
    continue
  fi

  convert "$src_file" -colorspace Gray -strip "$dst_file"
  echo "Created: $dst_file"
done
