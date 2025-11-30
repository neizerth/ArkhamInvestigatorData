#!/bin/bash
set -e

infile="$1"

# Get the directory where this script is located
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
WORKSPACE_ROOT="$(cd "$SCRIPT_DIR/../../.." && pwd)"
PROCESS_SCRIPT="$SCRIPT_DIR/_process.sh"

# Convert input file to absolute path
if [[ "$infile" = /* ]]; then
    infile_abs="$infile"
else
    infile_abs="$(cd "$(dirname "$infile")" && pwd)/$(basename "$infile")"
fi

# Generate output path
out_file="$WORKSPACE_ROOT/images/webp/${infile_abs#$WORKSPACE_ROOT/images/jpg/}"
out_file="${out_file%.*}.webp"
out_dir=$(dirname "$out_file")

mkdir -p "$out_dir"
# Remove existing file to ensure overwrite
bash "$PROCESS_SCRIPT" "$infile_abs" "$out_file"