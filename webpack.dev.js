//webpack.dev.js
/*const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
//const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: './src/client/index.js', 
    mode: 'development',
    devtool: 'source-map',
    stats: 'verbose',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/, 
                use: ["style-loader", "css-loader", "sass-loader"],
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html", // Fixed template path
            filename: "index.html",
        }),
        new CleanWebpackPlugin({
            dry: false, 
            verbose: true,
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false
        }),
        new webpack.HotModuleReplacementPlugin() 
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },    
    devServer: {
        port: 9000, 
        allowedHosts: 'all',
        static: {
            directory: path.join(__dirname, 'dist'), 
        },
        open: true, 
        hot: true
    }
};
*/

// webpack.dev.js
const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
//const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: './src/client/index.js',
    mode: 'development',
    devtool: 'source-map',
    stats: 'verbose',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/, 
                use: ["style-loader", "css-loader", "sass-loader"],
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html", // Fixed template path
            filename: "index.html",
        }),
        new CleanWebpackPlugin({
            dry: false, 
            verbose: true,
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false
        }),
        new webpack.HotModuleReplacementPlugin() 
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },    
    devServer: {
        port: 9000, 
        allowedHosts: 'all',
        static: {
            directory: path.join(__dirname, 'dist'), 
        },
        open: true, 
        hot: true
    }
};
