#!/bin/bash
set -e

cd ./dist/images/jpg

zip -r ../images.zip . -x "*/"