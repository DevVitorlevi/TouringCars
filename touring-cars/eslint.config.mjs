import { defineConfig } from "eslint/config";

export default defineConfig({
  root: true,
  env: {
    es2021: true,
    node: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "standard", // estilo “Standard” do ESLint
  ],
  rules: {
    // regras de estilo adicionais ou overrides
    semi: ["error", "always"],
    quotes: ["error", "double"],
    indent: ["error", 2],
    "no-trailing-spaces": "error",
    "key-spacing": ["error", { beforeColon: false, afterColon: true }],
    "space-before-blocks": ["error", "always"],
    "array-bracket-spacing": ["error", "never"],
    "object-curly-spacing": ["error", "always"],
    "eol-last": ["error", "always"],
    "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 0 }],
    "arrow-spacing": ["error", { before: true, after: true }],
    "keyword-spacing": ["error", { before: true, after: true }],
    "comma-dangle": ["error", "always-multiline"],
  },
});
