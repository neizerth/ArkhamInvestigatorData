#!/bin/bash
set -e

cd ./dist/images

zip -r -9 avif.zip avif/
zip -r -9 android.gte12.zip avif/ -x "*/grayscale/*"