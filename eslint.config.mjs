import { FlatCompat } from "@eslint/eslintrc";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import unusedImports from "eslint-plugin-unused-imports";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname
});

/** @type {import("eslint").Linter.Config[]} */
const eslintConfig = [
  // 1. Definição Global de Arquivos Ignorados
  {
    ignores: [".next/**", "out/**", "build/**", "next-env.d.ts"]
  },

  // 2. Extensões nativas do Next.js e TypeScript
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // 3. Sua Camada de Automação de Imports
  {
    plugins: {
      // Aqui mapeamos as strings para os objetos dos plugins importados no topo
      "simple-import-sort": simpleImportSort,
      "unused-imports": unusedImports
    },
    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      "unused-imports/no-unused-imports": "error"
    }
  }
];

export default eslintConfig;
