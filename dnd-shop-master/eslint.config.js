import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores([
    '**/node_modules/**',
    '**/dist/**',
    '**/build/**',
    '**/coverage/**',
    'dnd-shop-master/**',
    '**/generated/**',
    '**/backup/**',
    '**/backups/**',
    '**/*.bak',
    '**/*.backup.*',
    'public/data/**',
  ]),
  {
    files: ['src/**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
  },
  {
    files: ['src/data/narrativePacks/createNarrativePack.js'],
    rules: {
      // All narrative template callbacks intentionally accept the same context.
      'no-unused-vars': ['error', { args: 'none' }],
    },
  },
  {
    files: ['tests/**/*.{js,jsx}', 'playwright.config.js'],
    extends: [js.configs.recommended],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
  },
])
