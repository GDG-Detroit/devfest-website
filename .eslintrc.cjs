module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'prettier',
    'plugin:tailwindcss/recommended',
  ],
  ignorePatterns: [
    'dist',
    'build',
    '.eslintrc.cjs',
    'node_modules',
    '.prettierrc',
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'tailwindcss/classnames-order': 'off',
  },
  globals: {
    __dirname: true,
  },
}
