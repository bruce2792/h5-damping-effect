module.exports = {
    "env": {
        "browser": true,
        "node": true,
        "es6": true,
        "jquery": true,
        "amd": true,
        "commonjs": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        'no-console': 'off',
        'no-var': 'error'
    }
};