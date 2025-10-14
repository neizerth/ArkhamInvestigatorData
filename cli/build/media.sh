#!/bin/bash
set -e

bash ./cli/build/_prepare-dist.sh
# bash ./cli/build/_move-folders.sh
bash ./cli/build/_make-archives.sh