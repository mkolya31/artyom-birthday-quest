module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        'no-console': 'warn',
        'quotes': ['error', 'single'],
        'semi': ['error', 'never'],
        'no-empty': 'error',
        'no-duplicate-case': 'warn',
        'no-unreachable': 'error',
        'curly': 'warn',
        'eqeqeq': ['error', 'always'],
        'no-alert': 'warn',
        'no-multi-spaces': 'error',
        'block-spacing': ['error', 'always'],
        'no-duplicate-imports': 'warn',
        'object-curly-spacing': ['error', 'always']
    }
};
