#!/bin/bash
# ----------------------------------------------------------
# Upload a local folder to Cloudflare R2 (S3-compatible)
# ----------------------------------------------------------

set -e

# Automatically load environment variables from .env if present
if [ -f ".env" ]; then
  echo "📦 Loading environment from .env"
  set -a
  source .env
  source .env.local
  set +a
fi


# Check that all required environment variables are set
if [ -z "$R2_ACCOUNT_ID" ] || [ -z "$R2_BUCKET" ] || [ -z "$R2_ACCESS_KEY_ID" ] || [ -z "$R2_SECRET_ACCESS_KEY" ]; then
  echo "❌ Missing one or more R2_* environment variables"
  echo "Please export R2_ACCOUNT_ID, R2_BUCKET, R2_ACCESS_KEY_ID, and R2_SECRET_ACCESS_KEY"
  exit 1
fi

# The source directory to upload (default: ./dist)
SRC_DIR=${1:-dist}

# Optional destination prefix inside the bucket
DEST_DIR=${2:-}

# Define the R2 endpoint (S3-compatible)
ENDPOINT="https://${R2_ACCOUNT_ID}.r2.cloudflarestorage.com"

echo "🟢 Uploading '$SRC_DIR' → 's3://${R2_BUCKET}/${DEST_DIR}'"
echo "Endpoint: $ENDPOINT"

# Sync local directory to R2 bucket
aws s3 sync "$SRC_DIR" "s3://${R2_BUCKET}/${DEST_DIR}" \
  --endpoint-url "$ENDPOINT" \
  --delete \
  --acl private \
  --exact-timestamps \
  --no-progress

echo "✅ Upload complete!"
