#!/bin/bash
set -e

cd ./dist/images

zip -r -9 webp.zip webp/
zip -r -9 android.lt12.zip webp/ -x "*/grayscale/*"