module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/vue3-essential', '@vue/airbnb'],
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'global-require': 0,
    'vue/no-unused-components': [
      'error',
      {
        ignoreWhenBindingPresent: true,
      },
    ],
    'vue/no-unused-vars': [
      'error',
      {
        ignorePattern: '^_',
      },
    ],
    'vue/multi-word-component-names': [
      'error',
      {
        ignores: ['default'],
      },
    ],
    'max-len': [
      'error',
      {
        code: 600,
      },
    ],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'object-curly-newline': ['error', { consistent: true }],
    'vuejs-accessibility/anchor-has-content': [
      'error',
      {
        components: ['Anchor'],
        accessibleChildren: ['button'],
      },
    ],
    // 'object-shorthand': ['error', 'consistent-as-needed'],
    'prefer-destructuring': 0,
  },
};
