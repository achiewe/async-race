const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
      main: path.resolve(__dirname, './src/index.tsx'),
    },
    mode: 'production',
    module: {
        rules: [
            {
              test: /\.(ts|tsx)$/i,
              use: ['ts-loader'],
              exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
              test: /\.(png|jpg|gif|svg)$/i,
              type: 'asset/resource'
          },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, './dist'),
        assetModuleFilename: './assets/[hash][ext]'
    },
    devServer: {
      open: true,
      host: 'localhost',
    },
    context: path.join(__dirname),
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './public/index.html'),
            filename: 'index.html',
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
          patterns: [
              { from: "assets", to: "assets" },
          ]
      }),
    ],
    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000
  }
};