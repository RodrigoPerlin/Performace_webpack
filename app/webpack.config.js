const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports={
  mode: "development",
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
     },
     optimization: {
      splitChunks: {
        cacheGroups: {
          vendor: {
            chunks: "initial",
            test: path.resolve(__dirname, "node_modules"),
            name: "commons",
            enforce: true
          }
        }
      }
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: '/'
      },
      devServer: {
        compress: true,
        port: 9001, // default 8000
        historyApiFallback: true,
        hot: true,
      },
      resolve: {
        extensions: ['.js', '.jsx']
      },

      module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            options: { presets: ['@babel/env','@babel/preset-react'] },
  
          },
          {
              test: /\.css$/,
              exclude: /node_modules/,
              use: ['style-loader','css-loader'],
            },
            {
              test: /\.(jpg|jpeg|gif|png|svg|woff|woff2)$/,
              use: {
                loader: 'file-loader',
                options: { name: '[name].[hash].[ext]' },
              },
            },
        ],
      },
      performance : {
        hints : false
    }  ,
      plugins: [
        new HtmlWebpackPlugin({
          template: "./public/index.html",
        }),
          new webpack.optimize.ModuleConcatenationPlugin(),
          new BundleAnalyzerPlugin(),
              ],    

}