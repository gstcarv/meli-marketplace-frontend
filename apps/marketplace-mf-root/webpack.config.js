const { merge } = require('webpack-merge');
const singleSpaDefaults = require('webpack-config-single-spa-ts');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const dotenv = require('dotenv');

dotenv.config();

module.exports = (webpackConfigEnv, argv) => {
    const orgName = 'marketplace';
    const defaultConfig = singleSpaDefaults({
        orgName,
        projectName: 'root-config',
        webpackConfigEnv,
        argv,
        disableHtmlGeneration: true
    });

    return merge(defaultConfig, {
        // modify the webpack config however you'd like to by adding to this object
        plugins: [
            new HtmlWebpackPlugin({
                inject: false,
                template: 'src/index.ejs',
                templateParameters: {
                    isLocal: webpackConfigEnv && webpackConfigEnv.isLocal,
                    orgName,
                    rootConfigUrl: process.env.MARKETPLACE_ROOT_CONFIG || 'http://localhost:9000',
                    navbarMfUrl: process.env.MARKETPLACE_NAVBAR_URL || 'http://localhost:9001',
                    searchMfUrl: process.env.MARKETPLACE_SEARCH_URL || 'http://localhost:9002',
                    productMfUrl: process.env.MARKETPLACE_PRODUCT_URL || 'http://localhost:9003'
                },
                favicon: './src/public/favicon.svg'
            })
        ]
    });
};
