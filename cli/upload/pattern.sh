#!/bin/sh

ENV_PATH="./.env.local"
PATTERN="$1"

if [ -z "$PATTERN" ]; then
  echo "Usage: $0 <pattern>"
  exit 1
fi

set -o allexport
. "$ENV_PATH"
set +o allexport

# Local base directory to scan
BASE_DIR="./dist/images"

# Build include/exclude rules:
# - include files whose basename matches *PATTERN*
# - include all directories so mirror can traverse
# - exclude everything else
lftp -u "$FTP_USER","$FTP_PASS" "$FTP_HOST" <<EOF
set ftp:ssl-allow no
lcd .
mirror -R --verbose \
  --include-glob "$BASE_DIR/**/$PATTERN*" \
  --exclude-glob "$BASE_DIR/**" \
  --include "$BASE_DIR" \
  --include-glob "$BASE_DIR/**/" \
  "$BASE_DIR" "$FTP_REMOTE_DIR"
bye
EOF
