module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
    node: true
  },
  extends: [
    'plugin:vue/essential',
    'standard'
  ],
  plugins: [
    'vue'
  ],
  rules: {
    'semi': ['error', 'always'],
    'no-console': 'off',
    'no-new': 'off',
    'indent': ['error', 2],
    'vue/valid-v-for': 'off',
    'vue/script-indent': ['error', 2, {baseIndent: 1, switchCase: 1}]
  },
  'overrides': [
    {
      'files': ['*.vue'],
      'rules': {
        'indent': 'off'
      }
    }
  ]
};
