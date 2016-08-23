var Elixir = require('laravel-elixir')

Elixir.ready(function () {
  Elixir.webpack.mergeConfig({
    // ensure we are using the version of Vue that supports templates
    resolve: {
      alias: {
        vue: 'vue/dist/vue.js'
      }
    },
    // use buble loader since it is the default in Elixir
    vue: {
      loaders: {
        js: 'buble-loader'
      }
    },
    module: {
      loaders: [
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        },
        {
          test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
          loader: 'file-loader',
          query: {
            limit: 10000,
            name: '../img/[name].[hash:7].[ext]'
          }
        },
        {
          test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
          loader: 'url-loader',
          query: {
            limit: 10000,
            name: '../fonts/[name].[hash:7].[ext]'
          }
        }
      ]
    }
  })
})
