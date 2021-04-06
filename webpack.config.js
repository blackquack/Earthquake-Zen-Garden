const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const htmlPlugin = new HtmlWebpackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
})

module.exports = {
    entry: "./src",
    output: {
        path: path.resolve(__dirname, "docs"),
        filename: "bundle.js",
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    { loader: 'scoped-css-loader' },
                ]
            }
        ],
    },
    resolve: {
        extensions: ["*", ".js", ".jsx"],
    },
    plugins: [
        htmlPlugin,
        new CopyWebpackPlugin({ patterns: [{ from: 'public' }] })
    ],
    devtool: 'source-map',
    devServer: {
        historyApiFallback: true
    }
};