#!/bin/sh
set -eu   # no pipefail here

SRC="./dist/investigators.json"
OUT="./dist/investigators_images.json"

# Check that jq is installed
command -v jq >/dev/null 2>&1 || { echo "❌ jq is not installed"; exit 1; }

jq '
  # Create a stream of objects {id, width, height}
  [
    .[] |
    (
      # Base image: prefer image.id, else code
      if .image then
        { id: (.image.id // .code), width: .image.width, height: .image.height }
      else
        empty
      end
    ),
    (
      # Variants: only if image.id exists
      (.variants // [])[] |
      select(.image and .image.id) |
      { id: .image.id, width: .image.width, height: .image.height }
    ),
    (
      # Skins: prefer skin.image.id, else skin.id
      (.skins // [])[] |
      select(.image) |
      { id: (.image.id // .id), width: .image.width, height: .image.height }
    )
  ]
  # Deduplicate by id
  | unique_by(.id)
' "$SRC" > "$OUT"

echo "✅ JSON written to $OUT"
