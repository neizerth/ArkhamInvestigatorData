#!/bin/bash
set -e

cd ./dist/images

zip -r -9 avif.zip avif/ -x "*/mini/*"