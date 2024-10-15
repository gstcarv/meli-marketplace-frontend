const webpack = require('webpack');
const { merge } = require('webpack-merge');
const singleSpaDefaults = require('webpack-config-single-spa-react-ts');
const dotenv = require('dotenv');

dotenv.config();

module.exports = (webpackConfigEnv, argv) => {
    const defaultConfig = singleSpaDefaults({
        orgName: 'marketplace',
        projectName: 'product',
        webpackConfigEnv,
        argv
    });

    return merge(defaultConfig, {
        // modify the webpack config however you'd like to by adding to this object
        externals: ['styled-components'],
        plugins: [
            new webpack.DefinePlugin({
                'process.env': JSON.stringify(process.env)
            })
        ]
    });
};
