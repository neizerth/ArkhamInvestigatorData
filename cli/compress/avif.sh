#!/bin/bash
set -e

cd ./dist/images

zip -r -9 avif.zip avif/ -x "*/mini/*"
zip -r -9 avif.color.zip avif/ -x "*/grayscale/*" -x "*/mini/*"