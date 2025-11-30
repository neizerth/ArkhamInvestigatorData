#!/bin/bash
set -e

infile="$1"
out_file="$2"

avifenc --depth 8 --yuv 420 "$infile" "$out_file"