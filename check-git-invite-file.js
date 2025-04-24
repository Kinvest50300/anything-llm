const fs = require("fs");
const { execSync } = require("child_process");
const path = require("path");

const invitePath = path.resolve(
  "src/pages/Admin/Invitations/InviteRow/index.jsx"
);

console.log("📄 Fichier cible :");
console.log(invitePath);

if (fs.existsSync(invitePath)) {
  console.log("✅ Le fichier existe localement.");
} else {
  console.log("❌ Le fichier n'existe PAS dans ce chemin.");
  process.exit(1);
}

try {
  const gitStatus = execSync(`git status --short "${invitePath}"`, {
    encoding: "utf-8",
  }).trim();

  if (gitStatus === "") {
    console.log("📦 Git ne voit PAS de modification dans ce fichier.");
  } else {
    console.log("✅ Git voit ce changement :", gitStatus);
  }
} catch (err) {
  console.error("❌ Erreur Git :", err.message);
}
