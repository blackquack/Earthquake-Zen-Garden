const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const OUTPUT_DIR = path.resolve(__dirname, 'docs');

const htmlPlugin = new HtmlWebpackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
})

module.exports = {
    entry: "./src",
    output: {
        path: OUTPUT_DIR,
        filename: "bundle.js",
        publicPath: '/Earthquake-Zen-Garden'
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
        roots: [__dirname],
    },
    plugins: [
        htmlPlugin,
        new CopyWebpackPlugin({ patterns: [{ from: 'public' }] })
    ],
    devtool: 'source-map',
    devServer: {
        historyApiFallback: true,
        contentBase: OUTPUT_DIR,
        watchContentBase: true,
    }
};