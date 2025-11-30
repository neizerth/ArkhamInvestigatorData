#!/bin/bash
set -e

name="${1:-*}"

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
WORKSPACE_ROOT="$(cd "$SCRIPT_DIR/../../.." && pwd)"
src_dir="${2:-$WORKSPACE_ROOT/images/jpg}"

worker_path="$SCRIPT_DIR/worker.sh"

cd "$src_dir"

find "$src_dir" -type f -iname "${name}.*" | parallel "$worker_path" {}