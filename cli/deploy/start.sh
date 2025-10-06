#!/bin/bash
set -e

bash ./cli/deploy/_move-images.sh
bash ./cli/deploy/_move-grayscale.sh
bash ./cli/deploy/_make-archives.sh