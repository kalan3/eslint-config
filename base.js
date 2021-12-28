'use strict'

module.exports = {
  parserOptions: {
    sourceType: 'module',
  },
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'standard',
    'plugin:import/recommended',
  ],
  settings: {
    'import/resolver': {
      node: { extensions: ['.js', '.mjs'] },
    },
  },
  rules: {
    // Allow async-await
    'generator-star-spacing': 'off',
    // No async function without await
    'require-await': 'error',
    // Allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // Enforce import order
    'import/order': 'error',
    // Imports should come first
    'import/first': 'error',
    // Other import rules
    'import/no-mutable-exports': 'error',
    // Allow unresolved imports
    'import/no-unresolved': 'off',
    'import/no-unassigned-import': 'off',
    // Allow paren-less arrow functions only when there's no braces
    'arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],
    // Prefer const over let
    'prefer-const': ['error', {
      destructuring: 'any',
      ignoreReadBeforeAssign: false,
    }],
    // No single if in an 'else' block
    'no-lonely-if': 'error',
    // Force curly braces for control flow, including if blocks with a single statement
    curly: ['error', 'all'],
    // Force dot notation when possible
    'dot-notation': 'error',
    'no-var': 'error',
    'comma-dangle': ['error', 'always-multiline'],
  },
}
