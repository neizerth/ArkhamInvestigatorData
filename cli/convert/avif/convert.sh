#!/bin/bash
set -e

name="${1:-*}"

src_dir="./dist/images/jpg"
worker_path="$(cd "$(dirname "$0")" && pwd)/worker.sh"

cd ./dist/images/jpg
mkdir -p ../avif

find ./ -type f -iname "${name}.jpg" | parallel "$worker_path" {}