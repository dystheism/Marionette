'use strict';

const debug = true;
const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const client = {
    entry: {
        app: [
            './lib/app/main.js',
            './lib/app/websocket/client.js',
            './lib/app/interface/userInterface.js',
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        library: 'app',
        libraryTarget: 'umd'
    },
    plugins: [
        new webpack.ProvidePlugin({
        }),
        new webpack.DefinePlugin({
            PRODUCTION: JSON.stringify(true),
            VERSION: JSON.stringify('v1'),
            BROWSER_SUPPORTS_HTML5: true,
        })
    ],
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                uglifyOptions: {
                    warnings: false,
                    mangle: !debug,
                    keep_fnames: debug,
                    compress: {
                        unused: !debug
                    },
                },
            })
        ]
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader?cacheDirectory',
                enforce: 'pre'
            }
        ]
    },
    devtool: debug ? 'inline-source-map' : false,
    mode: debug ? 'development' : 'production'
};

module.exports = [client];
