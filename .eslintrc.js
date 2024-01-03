module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'standard-with-typescript',
        'plugin:react/recommended'
    ],
    overrides: [
        {
            env: {
                node: true
            },
            files: [
                '.eslintrc.{js,cjs}'
            ],
            parserOptions: {
                sourceType: 'script'
            }
        }
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: [
        'react'
    ],
    rules: {
        'react/jsx-indent': [2, 4],
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
        '@typescript-eslint/strict-boolean-expressions': 'off',
        '@typescript-eslint/indent': [2, 4],
        'no-unused-vars': 'warn',
        'react/jsx-props-no-spreading': 'warn',
        'react/react-in-jsx-scope': 'off',
        'react/button-has-type': 'warn',
        'react/function-component-definition': 'off',
        'no-shadow': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-underscore-dangle': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/prefer-nullish-coalescing': 'warn',
        '@typescript-eslint/naming-convention': 'off',
        '@typescript-eslint/no-non-null-assertion': 'warn',
        '@typescript-eslint/no-floating-promises': 'off',
        'react/no-deprecated': 'off'
    },
    globals: {
        __IS_DEV__: true
    }
}
