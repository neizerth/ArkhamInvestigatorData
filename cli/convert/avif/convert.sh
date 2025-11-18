#!/bin/bash
set -e

name="${1:-*}"

src_dir="./images/jpg"
ext="jpg"

worker_path="$(cd "$(dirname "$0")" && pwd)/worker.sh"

cd ./images/jpg
mkdir -p ../avif

find ./ -type f -iname "${name}.${ext}" | parallel "$worker_path" {}