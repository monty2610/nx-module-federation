const webpackConfig = require('@nrwl/react/plugins/webpack');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = (config, context) => {
    const c = webpackConfig(config);
    c.plugins.push(new ModuleFederationPlugin({
      name: 'authoring_app',
      filename: 'remoteEntry.js',
      exposes: {
        './App': './src/app/app'
      },
      shared: ['react', 'react-dom']
    }));

    return c;
  };