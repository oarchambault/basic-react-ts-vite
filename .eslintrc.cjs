module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "standard",
    "prettier",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "prettier"],
  rules: {
    "no-unused-vars": "warn",
    "prefer-const": "warn",
    "prettier/prettier": ["warn", { endOfLine: "auto" }],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  globals: {
    JSX: true,
  },
};
