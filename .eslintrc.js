/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const a11yOff = Object.keys(require('eslint-plugin-jsx-a11y').rules).reduce(
  (acc, rule) => {
    acc[`jsx-a11y/${rule}`] = 'off';
    return acc;
  },
  {},
);

module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    'jest/globals': true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    // 'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:prettier/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'import',
    'react-hooks',
    'unused-imports',
    'prettier',
    'jest',
  ],
  rules: {
    // tunr off all a11y related rules
    ...a11yOff,
    // shut up prettier
    'prettier/prettier': 2,
    // mostly related to React import
    'no-use-before-define': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    // to be set to ['error'] after code cleanup
    '@typescript-eslint/no-use-before-define': 'off',
    // allow JSX in following files (.js & .jsx to be removed in future after code cleanup)
    'react/jsx-filename-extension': [
      'warn',
      { extensions: ['.tsx', '.jsx', '.js'] },
    ],
    // do not require file extension for following files
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
        js: 'never',
        jsx: 'never',
      },
    ],
    // get rid of: "Expected an assignment or function call and instead saw an expression"
    'no-unused-expressions': [
      'error',
      { allowTernary: true, allowShortCircuit: true },
    ],
    // default export only when really needed (e.g. lazy loading)
    'import/prefer-default-export': 'off',
    // no need to define PropTypes with TS
    'react/require-default-props': 'off',
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    // allow spread operator on html tags
    'react/jsx-props-no-spreading': 'off',
    // tag closing bracket in new line
    // 'react/jsx-closing-bracket-location': [1, 'tag-aligned'],

    'no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
          'type',
        ],
        pathGroups: [
          {
            pattern: 'atoms',
            group: 'parent',
          },
          {
            pattern: 'molecules',
            group: 'sibling',
          },
          {
            pattern: 'organisms',
            group: 'index',
          },
          {
            pattern: '{.,..}/*.scss',
            group: 'index',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        warnOnUnassignedImports: true,
      },
    ],
    'sort-imports': [
      'error',
      {
        ignoreDeclarationSort: true,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        allowSeparatedGroups: true,
      },
    ],
    'react/require-default-props': [0],
    /**
     * temporary rules
     * those should be removed after code cleanup
     */
    // avoid nested ternary operator - replace with if/switch
    'no-nested-ternary': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    //
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    // no shadow - variables scope reading issue
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'off',
    // explicitly set button type
    'react/button-has-type': 'off',
    // array idx shouldn't be used as a key
    'react/no-array-index-key': 'off',
    'react/jsx-key': 'error',
    // no undefined to be used
    'no-undef': 'error',
    // it's OK to use any if a part of the app is in JS
    // and specifying the correct type would take too much time
    // from the TS docs:
    // "The any type is a powerful way to work with existing JavaScript,
    // allowing you to gradually opt-in and opt-out of type checking
    // during compilation."
    '@typescript-eslint/no-explicit-any': 'off',
    'no-console': ['error', { allow: ['error'] }],
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {},
    },
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'no-undef': 'off',
      },
    },
  ],
};
