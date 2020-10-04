module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "prettier",
    "prettier/react",
    "plugin:jsx-a11y/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "prettier", "jsx-a11y"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "lf",
        semi: false,
        singleQuote: false,
        tabWidth: 2,
        trailingComma: "es5",
      },
    ],
    "react/jsx-filename-extension": [
      "error",
      {
        extensions: [".js", ".jsx"],
      },
    ],
    "react/prop-types": 0,
    "no-unused-vars": [
      "error",
      {
        vars: "local",
        args: "none",
      },
    ],
  },
  settings: {
    "import/resolver": {
      node: {
        paths: ["./", "./src"],
      },
      alias: [
        ["~components", "./src/components"],
        ["~fonts", "./src/fonts"],
        ["~icons", "./src/components/icons"],
        ["~pages", "./src/pages"],
        ["~styles", "./src/styles"],
      ],
    },
  },
}
