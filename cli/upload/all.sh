#!/bin/sh

ENV_PATH="./.env.local"
FTP_LOCAL_DIR="${1:-./dist/images}"

set -o allexport
. "$ENV_PATH"
set +o allexport

lftp -u "$FTP_USER","$FTP_PASS" "$FTP_HOST" <<EOF
set ftp:ssl-allow no
mirror -R --verbose "$FTP_LOCAL_DIR" "$FTP_REMOTE_DIR"
bye
EOF