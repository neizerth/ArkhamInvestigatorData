#!/bin/bash
set -e

cd ./dist/images

zip -r -9 webp.zip webp/ -x "*/mini/*"