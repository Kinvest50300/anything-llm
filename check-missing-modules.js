const fs = require("fs");
const path = require("path");
const glob = require("glob");

// Dossiers à scanner
const baseDir = path.resolve(__dirname);
const exts = ["js", "jsx", "ts", "tsx"];

// Trouve tous les fichiers
const files = glob.sync(`${baseDir}/**/*.{${exts.join(",")}}`, {
  ignore: ["**/node_modules/**", "**/dist/**"],
});

const importRegex = /(?:import\s+(?:.+?)\s+from\s+['"]([^.'"].+?)['"]|require\(['"]([^.'"].+?)['"]\))/g;

const packages = new Set();

files.forEach((file) => {
  const content = fs.readFileSync(file, "utf8");
  let match;
  while ((match = importRegex.exec(content)) !== null) {
    const moduleName = match[1] || match[2];
    if (moduleName) {
      packages.add(moduleName.split("/")[0]); // garde juste le package racine
    }
  }
});

// Vérifie s'ils sont installés
console.log("\n🔍 Vérification des dépendances utilisées dans le code…\n");

let missing = [];

packages.forEach((pkg) => {
  try {
    require.resolve(pkg);
  } catch {
    missing.push(pkg);
  }
});

if (missing.length === 0) {
  console.log("✅ Toutes les dépendances sont installées !");
} else {
  console.log("❌ Dépendances manquantes :");
  missing.forEach((m) => console.log("→", m));
}
