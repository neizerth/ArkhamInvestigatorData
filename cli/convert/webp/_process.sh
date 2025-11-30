#!/bin/bash
set -e

infile="$1"
out_file="$2"

cwebp q 80 -m 6 -mt "$infile" -o "$out_file"