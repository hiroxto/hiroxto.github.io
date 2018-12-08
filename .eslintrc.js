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
    'plugin:vue/strongly-recommended',
    'standard',
  ],
  plugins: [
    'vue',
    'promise',
  ],
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    'semi': ['error', 'always'],
    'no-console': 'off',
    'no-new': 'off',
    'indent': ['error', 2],
    'vue/script-indent': ['error', 2, { 'baseIndent': 1, 'switchCase': 1 }],
    'vue/html-indent': ['error', 2, { 'attribute': 1, 'closeBracket': 0, 'baseIndent': 1 }],
    'vue/html-closing-bracket-newline': ['error', { 'singleline': 'never', 'multiline': 'always' }],
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
    'vue/html-self-closing': ['error', { 'html': { 'void': 'never', 'normal': 'never', 'component': 'never' } }],
    'vue/max-attributes-per-line': ['error', { 'singleline': 2 }],
    'vue/this-in-template': ['error'],
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
