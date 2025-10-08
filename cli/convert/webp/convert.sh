#!/bin/bash
set -e

name="${1:-*}"

src_dir="./images/jpg"
worker_path="$(cd "$(dirname "$0")" && pwd)/worker.sh"

cd ./images/jpg
mkdir -p ../webp

find ./ -type f -iname "${name}.jpg" | parallel "$worker_path" {}