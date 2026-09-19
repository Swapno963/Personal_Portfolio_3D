#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
CHROME="${CHROME:-google-chrome-stable}"

print_one() {
  local html="$1"
  local pdf="$2"
  local tmp
  tmp="$(mktemp /tmp/resumeXXXX.pdf)"
  "$CHROME" \
    --headless \
    --disable-gpu \
    --no-pdf-header-footer \
    --no-sandbox \
    --print-to-pdf="$tmp" \
    "file://${html}"
  mv "$tmp" "$pdf"
  echo "Wrote $pdf"
}

print_one \
  "$ROOT/resume/Swapno-Mondol-Backend-Engineer.html" \
  "$ROOT/public/Swapno-Mondol-Backend-Engineer.pdf"

print_one \
  "$ROOT/resume/Swapno-Mondol-DevOps-Engineer.html" \
  "$ROOT/public/Swapno-Mondol-DevOps-Engineer.pdf"
