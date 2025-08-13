#!/bin/bash
set -e

cd ./dist/images

7z a -mx=9 webp.7z webp/
7z a -mx=9 android.lt12.7z webp/ -xr!grayscale