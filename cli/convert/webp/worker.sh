#!/bin/bash
set -e

infile="$1"
out_file="../webp/${infile#./}"
out_file="${out_file%.*}.webp"
out_dir=$(dirname "$out_file")

mkdir -p "$out_dir"
cwebp q 80 -m 6 -mt "$infile" -o "$out_file"