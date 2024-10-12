module.exports = {
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.(j|t)sx?$': 'babel-jest'
    },
    moduleNameMapper: {
        '\\.(css)$': 'identity-obj-proxy',
        '\\.(png|jpg|jpeg|gif)$': 'identity-obj-proxy'
    },
    setupFilesAfterEnv: ['@testing-library/jest-dom', '<rootDir>/src/setupTests.ts']
};
