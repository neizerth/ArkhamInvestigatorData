#!/bin/bash
set -e

cd ./dist/images

zip -r -9 avif.color.zip avif/ -x "*/mini/*"