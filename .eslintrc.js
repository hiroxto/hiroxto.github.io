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
        'standard'
    ],
    rules: {
        'semi': ['error', 'always'],
        'generator-star-spacing': 'off',
        'no-console': 'off',
    }
};
