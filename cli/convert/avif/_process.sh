#!/bin/bash
set -e

infile="$1"
out_file="$2"

avifenc "$infile" "$out_file"