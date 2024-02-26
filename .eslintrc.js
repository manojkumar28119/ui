module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "jest":true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "settings":{
        "react":{
            version:"detect"
        }
    },
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/react-in-jsx-scope":"off",
        "react/prop-types": "off",
        "react/no-unescaped-entities": "off",
        "no-unused-vars": "off",
    }
}
