const webpackConfig = require('@nrwl/react/plugins/webpack');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = (config, context) => {
    const c = webpackConfig(config);
    c.plugins.push(new ModuleFederationPlugin({
      name: 'admin_app',
      remotes: {
        'authoring_app': 'authoring_app@http://localhost:3000/remoteEntry.js'
      },
      shared: ['react', 'react-dom']
    }));

    return c;
  };