#!/usr/bin/env bash
set -e
git rev-parse --is-inside-work-tree >/dev/null 2>&1 || { echo "❌ Non sei in una repo Git"; exit 1; }
msg="${*:-autosave $(date '+%Y-%m-%d %H:%M')}"
stamp="$(date '+%Y%m%d-%H%M')"
tag="checkpoint-$stamp"
git add -A
if ! git diff --cached --quiet; then git commit -m "$msg"; else echo "ℹ️ Nessuna modifica da committare"; fi
git tag -a "$tag" -m "$msg"
branch="$(git rev-parse --abbrev-ref HEAD)"
git push -u origin "$branch"
git push origin "$tag"
echo "✅ Push e tag creato: $tag"
