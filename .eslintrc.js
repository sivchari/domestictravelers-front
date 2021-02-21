module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'airbnb',
        'airbnb/hooks',
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'prettier/react',
        'prettier/@typescript-eslint'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 12,
        sourceType: 'module'
    },
    plugins: ['react', '@typescript-eslint', 'prettier'],
    rules: {
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error'],
        'react/jsx-filename-extension': 'off',
        'react/jsx-closing-bracket-location': [
            'error',
            { selfClosing: 'tag-aligned', nonEmpty: 'after-props' }
        ],
        "react/jsx-wrap-multilines": ["error", {
            "declaration": "parens-new-line",
            "assignment": "parens-new-line",
            "return": "parens-new-line",
            "arrow": "parens-new-line",
            "condition": "parens-new-line",
            "logical": "ignore",
            "prop": "ignore"
        }],
        'react/jsx-one-expression-per-line': 0,
        'import/no-unresolved': ['off', { caseSensitive: true }],
        'import/extensions': 'off'
    },
    settings: {
        react: {
            version: 'detect'
        }
    }
};