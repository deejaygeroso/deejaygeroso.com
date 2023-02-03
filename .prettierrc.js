module.exports = {
  arrowParens: 'avoid',
  bracketSpacing: true,
  endOfLine: 'auto',
  /*
   * importOrder is an extension of @trivago/prettier-plugin-sort-imports package
   */
  importOrder: [
    'react(.*)$',
    '<THIRD_PARTY_MODULES>',
    '^@/common/(.*)$',
    '^@/context/(.*)$',
    '^@/data/(.*)$',
    '^@/pages/(.*)$',
    '^@/styles/(.*)$',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  jsxBracketSameLine: true,
  jsxSingleQuote: true,
  parser: 'typescript',
  printWidth: 120,
  proseWrap: 'never',
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  useTabs: false,
}
