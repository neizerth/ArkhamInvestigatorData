#!/bin/bash
set -e

cd ./dist/images

zip -r -9 webp.zip webp/
zip -r -9 webp.color.zip webp/ -x "*/grayscale/*"