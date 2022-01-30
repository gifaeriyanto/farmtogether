const { readdirSync } = require('fs');

const getDirectories = (source) =>
  readdirSync(source, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

const aliases = getDirectories('./app').map((dir) => `^${dir}`);

module.exports = {
  extends: ['next', 'plugin:prettier/recommended', 'prettier'],
  plugins: ['prettier', 'simple-import-sort', '@typescript-eslint'],
  rules: {
    // react rules
    'react-hooks/exhaustive-deps': 'off',
    'jsx-a11y/accessible-emoji': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'react/jsx-sort-props': 'off',

    // import rules
    'import/extensions': [
      'warn',
      'never',
      {
        css: 'ignorePackages',
        graphql: 'ignorePackages',
      },
    ],
    'import/newline-after-import': 'warn',
    'import/order': 'off',
    'sort-imports': 'off',

    // simple import rules
    'simple-import-sort/exports': 'warn',
    'simple-import-sort/imports': [
      'warn',
      {
        groups: [
          // CSS/SCSS imports
          ['^.+\\.s?css$'],
          // Side effect imports
          ['^\\u0000'],
          // React imports
          ['^react$', '^@?\\w'],
          // Relative imports.
          // Anything that starts with a dot.
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          // Aliases
          [...aliases],
        ],
      },
    ],

    // other rules
    'func-names': 'off',
  },
  overrides: [
    {
      files: ['**/*.d.ts', '**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
      },
      rules: {
        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/no-unnecessary-condition': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'warn',
        '@typescript-eslint/require-await': 'off',
        '@typescript-eslint/restrict-template-expressions': 'warn',
        '@typescript-eslint/unbound-method': 'warn',
      },
    },
  ],
};
