module.exports = {
    rootDir: 'src',
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.(j|t)sx?$': 'babel-jest'
    },
    moduleNameMapper: {
        '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'identity-obj-proxy',
        'single-spa-react/parcel': 'single-spa-react/lib/cjs/parcel.cjs',
        '^axios$': 'axios/dist/node/axios.cjs'
    },
    setupFilesAfterEnv: ['@testing-library/jest-dom', '<rootDir>/setupTests.ts']
};
