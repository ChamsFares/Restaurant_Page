const path = require('path');
const HtmlWEbpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    plugins: [
        new HtmlWEbpackPlugin({
            template: './src/index.html'
        })
    ],
    devtool: false,
    output : {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
};