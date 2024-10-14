/** @type {import("eslint").Linter.Config} */
module.exports = {
    root: true,
    extends: ['@meli/eslint-config/library.js'],
    parser: '@typescript-eslint/parser',
    env: {
        jest: true
    }
};
