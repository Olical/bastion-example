import {last} from 'lodash'

export function webpack (config, options) {
  // You can inspect the config structure easily
  // console.log(config)

  // Add the elm loader
  config.module.loaders.push({
    test: /\.elm$/,
    exclude: [/elm-stuff/, /node_modules/],
    loaders: ['elm-webpack']
  })

  config.resolve.extensions = ['', '.js', '.elm']

  if (options.dev) {
    // Add the hot module loader
    // Has to come before babel, so we unshift
    config.module.loaders.unshift({
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'react-hot'
    })

    // Enable hot Elm reloading
    last(config.module.loaders).loaders.unshift('elm-hot')
  }

  return config
}
