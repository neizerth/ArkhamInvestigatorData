#!/bin/bash
set -e

name="${1:-*}"

src_dir="${2:-./images/jpg}"
worker_path="$(cd "$(dirname "$0")" && pwd)/worker.sh"

cd "$src_dir"
mkdir -p ./images/webp

find ./ -type f -iname "${name}.*" | parallel "$worker_path" {}