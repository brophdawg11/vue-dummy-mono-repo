module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint',
        sourceType: 'module'
    },
    env: {
        browser: true,
        jest: true,
    },
    extends: [
        'airbnb-base',
        'plugin:vue/recommended'
    ],
    plugins: [
        'vue',
    ],
    rules: {
        // 4 space indent
        'indent': [ 'error', 4 ],
        // Don't enforce newlines on function parens
        'function-paren-newline': 'off',
        // Max length of 100 characters in source code
        'max-len': ['error', {
            code: 100,
            ignoreUrls: true
        }],
        // Don't enforce one-var for now
        'one-var': 'off',
        // Put operators at the end of the lint (?, :, &&, ||)
        'operator-linebreak': ['error', 'after'],
        // Don't enforce a blank line or not at the beginning of a block
        'padded-blocks': 'off',
        // Don't enforce promises being rejected with Error objects
        'prefer-promise-reject-errors': 'off',
        // Use 4 space indents in templates
        'vue/html-indent': ['error', 4],
        // Allow max 2 attributes on a single line element, but once the
        // element is spread across multiple, require one attribute per line
        'vue/max-attributes-per-line': ['error', {
            'singleline': 3,
            'multiline': {
                'max': 1,
                'allowFirstLine': true
            }
        }]
    },
    overrides: [{
        files: ['test/e2e/**/*.js'],
        plugins: ['cypress'],
    }, {
        files: ['stories/**/*.js'],
        rules: {
            'import/no-extraneous-dependencies': 'off'
        },
    }],
}
