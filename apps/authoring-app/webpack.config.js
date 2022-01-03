const { ModuleFederationPlugin } = require('webpack').container;

module.exports = (c, context) => {
    c.context = process.cwd();
    c.optimization.runtimeChunk = false;
    c.plugins.push(new ModuleFederationPlugin({
      name: 'authoring_app',
      filename: 'remoteEntry.js',
      exposes: {
        './AuthoringApp': './apps/authoring-app/src/app/app'
      },
      shared: ['react', 'react-dom']
    }));

    c.output = {
          uniqueName: 'authoring_app',
          publicPath: 'auto',
          clean: true,
        }

    return c;
  };