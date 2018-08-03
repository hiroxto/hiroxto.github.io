module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint'
    },
    env: {
        browser: true,
        node: true,
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
    }
};
