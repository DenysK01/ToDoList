module.exports = {
  root: true,
  env: {
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'react-hooks-static-deps'],
  extends: [
    '@react-native-community',
    'prettier',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  settings: {
    'import/resolver': {
      typescript: {},
      'babel-plugin-root-import': {
        rootPathPrefix: '~',
        rootPathSuffix: 'src',
      },
    },
  },
  rules: {
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'off',
    'react-hooks-static-deps/exhaustive-deps': [
      'warn',
      {
        staticHooks: {
          useAppDispatch: true,
        },
      },
    ],
    'no-console': ['error', {allow: ['warn', 'info']}],
    '@typescript-eslint/no-explicit-any': 'off',
    'react-native/no-inline-styles': 0,
  },
};
