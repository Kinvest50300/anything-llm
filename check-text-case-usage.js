const fs = require("fs");
const path = require("path");
const glob = require("glob");

const baseDir = path.resolve(__dirname);
const extensions = ["js", "jsx", "ts", "tsx"];

const files = glob.sync(`${baseDir}/**/*.{${extensions.join(",")}}`, {
  ignore: ["**/node_modules/**", "**/dist/**"],
});

const importPattern = /from ['"]change-case['"]/;
const usagePattern = /\b(titleCase|sentenceCase)\s*\(/;

const matches = [];

files.forEach((file) => {
  const content = fs.readFileSync(file, "utf8");
  if (importPattern.test(content) || usagePattern.test(content)) {
    matches.push(file);
  }
});

if (matches.length === 0) {
  console.log("✅ Aucun usage de `change-case` détecté.");
} else {
  console.log("❌ Fichiers contenant `change-case` ou ses fonctions :\n");
  matches.forEach((f) => console.log("→", path.relative(baseDir, f)));
}
