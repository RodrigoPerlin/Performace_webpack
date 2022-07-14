const { ModuleFederationPlugin } = require('webpack').container;
const deps = require('./package.json').dependencies;

module.exports = {
  entry: './src/index',
  mode: 'development',
  devServer: {
    port: 3003,
  },
  output: {
    publicPath: 'auto',
    clean: true,
  },
  module: {},
  plugins: [
    new ModuleFederationPlugin({
      name: 'libs',
      filename: 'remoteEntry.js',
      shared: [
        {
          react: { 
            requiredVersion: deps.react,
            singleton: true,
            eager: true
          },
          'react-dom': {
            requiredVersion: deps['react-dom'],
            singleton: true,
            eager: true
          }}]
    }),
  ],
};
