module.exports = {
  extends: [
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from @typescript-eslint/eslint-plugin
    /* -----------------------------------------------------------------------------------------------------------------
     * Enables eslint-plugin-prettier and displays prettier errors as ESLint errors.
     * THe plugin:prettier/recommended config sets up both eslint-plugin-prettier and eslint-config-prettier in one go
     * Make sure this is always the last configuration in the extends array.
     * ----------------------------------------------------------------------------------------------------------------- */
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  plugins: ['@typescript-eslint', 'typescript-sort-keys'],
  root: true,
  rules: {
    'no-console': ['warn', { allow: ['info', 'error'] }],
    'react/jsx-sort-props': [
      'error',
      {
        callbacksLast: true,
        ignoreCase: true,
        noSortAlphabetically: false,
        shorthandFirst: false,
        shorthandLast: true,
      },
    ],
    semi: ['error', 'never'],
    'sort-keys': ['error', 'asc', { caseSensitive: false }],
    'typescript-sort-keys/interface': 'error',
    'typescript-sort-keys/string-enum': 'error',
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
}
