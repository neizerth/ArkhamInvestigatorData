#!/bin/bash
set -e

bash ./cli/build/_move-images.sh
bash ./cli/build/_move-grayscale.sh
bash ./cli/build/_make-archives.sh