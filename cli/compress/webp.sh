#!/bin/bash
set -e

DIST_DIR="$(cd ./dist/images && pwd)"

cd ./images

zip -r -9 $DIST_DIR/webp.zip webp/ -x "*/mini/*"
zip -r -9 $DIST_DIR/webp.color.zip webp/ -x "*/grayscale/*" -x "*/mini/*"