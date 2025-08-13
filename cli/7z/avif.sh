#!/bin/bash
set -e

cd ./dist/images

7z a -mx=9 avif.7z avif/
7z a -mx=9 android.gte12.7z avif/ -xr!grayscale