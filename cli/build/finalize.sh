#!/bin/bash
set -e

bash ./cli/build/_prepare-dist.sh

bash ./cli/build/_download-thumbnails.sh
bash ./cli/build/_convert-thumbnails.sh

bash ./cli/build/_make-archives.sh