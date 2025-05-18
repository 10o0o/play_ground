/* eslint-disable import/no-extraneous-dependencies */
// eslint.config.cjs
const js = require('@eslint/js');
const { FlatCompat } = require('@eslint/eslintrc');

// If you need __dirname in an ESM context, but in CJS it's available directly:
// const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Instantiate FlatCompat to import legacy configs
const compat = new FlatCompat({
  baseDirectory: __dirname,
  // you can also pass `recommendedConfig: js.configs.recommended` or `allConfig: js.configs.all`
});

module.exports = [
  // 1. ESLint’s built-in “recommended” (JS) rules
  js.configs.recommended,

  // 2. Bring in Airbnb’s base rules and Prettier’s override rules
  ...compat.extends('airbnb-base', 'plugin:prettier/recommended'),

  // 3. (Optional) Add any project-specific overrides here
  {
    files: ['**/*.{js,cjs,mjs}'],
    languageOptions: {
      sourceType: 'commonjs',
      ecmaVersion: 'latest',
    },
    rules: {
      // e.g. turn off console warnings in dev
      'no-console': 'warn',
      'no-param-reassign': 'off',
      'no-plusplus': 'off',
      'no-continue': 'off',
    },
  },
];
