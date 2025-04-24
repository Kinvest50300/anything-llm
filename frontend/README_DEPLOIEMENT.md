# Déploiement du Frontend AnythingLLM sur Render

## Configuration Render

- Root Directory: `frontend`
- Build Command: `bash render-build.sh`
- Start Command: `npm start`
- Node version: 18+

## Variables d'environnement

Créez un fichier `.env.production` à partir de `.env.example` et remplissez les clés nécessaires.

## Notes

- Ce projet utilise Vite + React
- Vérifiez que tous les fichiers `.wasm` requis sont présents dans le dossier `public/piper/` si vous utilisez la synthèse vocale.
