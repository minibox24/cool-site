module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 8,
    ecmaFeatures: {
      jsx: true,
      tsx: true,
    },
  },
  ignorePatterns: ['node_modules/*', '.next/*'],
  extends: ['eslint:recommended'],
};
