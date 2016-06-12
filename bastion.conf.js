export function webpack (config, options) {
  // You can inspect the config structure easily
  // console.log(config)

  if (options.dev) {
    // Add the hot module loader to the js loaders
    // Has to come before babel, so we unshift
    config.module.loaders.unshift({
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'react-hot'
    })
  }

  return config
}
