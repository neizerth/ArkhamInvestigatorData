#!/bin/bash
set -e

name="${1:-*}"

src_dir="${2:-./images/source}"

worker_path="$(cd "$(dirname "$0")" && pwd)/worker.sh"

cd "$src_dir"

find "$src_dir" -type f -iname "${name}.*" | parallel "$worker_path" {}