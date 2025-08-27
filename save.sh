#!/usr/bin/env bash
# Autosave su Git: aggiunge, committa e pusha.
# Uso: ./save.sh "messaggio del commit"
# Se non passi un messaggio, userà un timestamp.

set -e

# Verifica di essere in una repo git
git rev-parse --is-inside-work-tree >/dev/null 2>&1 || { echo "❌ Non sei in una repo Git"; exit 1; }

# Messaggio del commit
msg="${*:-autosave $(date '+%Y-%m-%d %H:%M')}"

# Mostra remote per trasparenza
echo "🔗 Remote attuali:"
git remote -v || true
echo

# Aggiungi tutto e prova il commit
git add -A
if git diff --cached --quiet; then
  echo "ℹ️  Nessuna modifica da committare."
else
  git commit -m "$msg"
fi

# Pusha sul branch corrente (di solito main)
current_branch="$(git rev-parse --abbrev-ref HEAD)"
echo "⬆️  Push su origin/$current_branch ..."
git push -u origin "$current_branch"
echo "✅ Fatto!"
