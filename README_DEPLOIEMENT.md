# Déploiement du Frontend AnythingLLM sur Render

## Étapes :

1. **Push du projet sur GitHub**

2. **Créer un nouveau service Web sur Render**
   - Type : Static Site ou Web Service (Node)
   - Build Command: `bash render-build.sh`
   - Start Command: `npm start`
   - Node version : 18+
   - Root Directory : `anything-llm-master`

3. **Configurer vos variables d'environnement**
   - Copiez/collez depuis `.env.production`

## Remarques :
- Des fichiers `.wasm` sont inclus en placeholders. Remplacez-les par les vrais fichiers de Piper si vous activez le TTS.
