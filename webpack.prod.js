const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const { GenerateSW } = require('workbox-webpack-plugin');

module.exports = {
    entry: './src/client/index.js', // Fixed incorrect entry path
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
              test: /\.css$/i, 
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/client/views/index.html', 
            filename: 'index.html',
        }),
        new CleanWebpackPlugin(),
        new webpack.DefinePlugin({
          'process.env.API_URL': JSON.stringify(process.env.API_URL),
        }),
        new GenerateSW({
            clientsClaim: true,
            skipWaiting: true,
        }),
    ],
};
