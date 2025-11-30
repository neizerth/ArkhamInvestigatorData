#!/bin/bash
set -e

infile="$1"

out_file="../avif/${infile#./}"
out_file="${out_file%.*}.avif"

out_dir=$(dirname "$out_file")

# Get the directory where this script is located
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROCESS_SCRIPT="$SCRIPT_DIR/_process.sh"

mkdir -p "$out_dir"
bash "$PROCESS_SCRIPT" "$infile" "$out_file"