#!/bin/bash
set -e

DIST_DIR="$(cd ./dist/images && pwd)"

cd ./images

zip -r -9 $DIST_DIR/avif.zip avif/ -x "*/mini/*"
zip -r -9 $DIST_DIR/avif.color.zip avif/ -x "*/grayscale/*" -x "*/mini/*"