module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'prettier',
    'eslint:recommended',
    'standard'
  ],
  parser: '@typescript-eslint/parser',
  settings: {
    react: {
      version: '999.999.999'
    }
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'prettier',
    'react',
    '@typescript-eslint'
  ],
  rules: {}
}
