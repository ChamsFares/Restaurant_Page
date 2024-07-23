const path = require('path');
const HtmlWEbpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
        home: './src/HomeTab.js',
        menu: './src/MenuTab.js',
        contact: './src/ContactTab.js',
    },
    plugins: [
        new HtmlWEbpackPlugin({
            template: './src/index.html'
        })
    ],
    devtool: false,
    output : {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
          },
        ],
      },
};