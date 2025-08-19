#!/bin/bash
set -e

infile="$1"
out_file="../avif/${infile#./}"
out_file="${out_file%.*}.avif"
out_dir=$(dirname "$out_file")

mkdir -p "$out_dir"
avifenc "$infile" "$out_file"