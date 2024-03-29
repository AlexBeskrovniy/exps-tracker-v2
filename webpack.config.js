const webpack = require('webpack');
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry: './src/index.jsx',

    output: {
        path: path.join(__dirname, '/dist'),
        filename: '[name].bundle.js',
        clean: true
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react'
                        ]
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.jpg$/,
                use: {
                    loader: 'file-loader'
                }
            }
        ]
    },

    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html',
        }),
        new webpack.ProvidePlugin({
            'React': 'react',
        })
    ],

    devServer: {
        historyApiFallback: true,
        open: true,
        hot: true
    },

    experiments: {
        topLevelAwait: true
    }
}