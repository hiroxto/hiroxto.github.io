module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
  },
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    'standard',
  ],
  plugins: [
    'vue',
  ],
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    'semi': ['error', 'always'],
    'no-console': 'off',
    'no-new': 'off',
    'indent': ['error', 2],
    'vue/script-indent': ['error', 2, { baseIndent: 1, switchCase: 1 }],
    'vue/html-indent': ['error', 2, { attribute: 1, closeBracket: 0, baseIndent: 1 }],
    'vue/html-closing-bracket-newline': ['error', { 'singleline': 'never', multiline: 'always' }],
    'vue/html-quotes': ['error', 'double'],
    'vue/no-multi-spaces': ['error', { ignoreProperties: true }],
    'vue/v-bind-style': ['error', 'shorthand'],
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
  },
  overrides: [
    {
      'files': ['*.vue'],
      'rules': {
        'indent': 'off',
      },
    },
  ],
};
