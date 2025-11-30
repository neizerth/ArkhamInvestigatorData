#!/bin/bash
set -e

infile="$1"
out_file="$2"

echo "current directory: $(pwd)"
echo "infile: $infile"
echo "out_file: $out_file"

avifenc --depth 8 --yuv 420 "$infile" "$out_file"