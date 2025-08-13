#!/bin/sh

OVERWRITE=0
if [ "$1" = "-f" ]; then
  OVERWRITE=1
  shift
fi

BASENAME="$1"
ROOT="./dist/images/jpg"

find "$ROOT" -type f -name "$BASENAME.jpg" ! -path "*/grayscale/*" | while IFS= read -r src_file; do
  src_dir=$(dirname "$src_file")
  dst_dir="$src_dir/grayscale"
  dst_file="$dst_dir/$BASENAME.jpg"

  mkdir -p "$dst_dir"

  if [ "$OVERWRITE" -eq 0 ] && [ -f "$dst_file" ]; then
    echo "Skip (exists): $dst_file"
    continue
  fi

  convert "$src_file" -colorspace Gray -strip "$dst_file"
  echo "Created: $dst_file"
done
