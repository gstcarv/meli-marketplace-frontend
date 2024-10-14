const { resolve } = require('node:path');

const project = resolve(process.cwd(), 'tsconfig.json');

/*
 * This is a custom ESLint configuration for use with
 * internal (bundled by their consumer) libraries
 * that utilize React.
 */

/** @type {import("eslint").Linter.Config} */
module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'turbo'
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['only-warn', '@typescript-eslint'],
    globals: {
        React: true,
        JSX: true
    },
    env: {
        browser: true,
        jest: true
    },
    settings: {
        'import/resolver': {
            typescript: {
                project
            }
        },
        react: {
            version: 'detect'
        }
    },
    rules: {
        'no-redeclare': 'off',
        'react/display-name': 'off',

        /**
         * @see https://stackoverflow.com/questions/55807329/why-eslint-throws-no-unused-vars-for-typescript-interface
         */
        '@typescript-eslint/no-unused-vars': 'off'
    },
    ignorePatterns: [
        // Ignore dotfiles
        '*.js',
        'node_modules/',
        'dist/'
    ]
};
