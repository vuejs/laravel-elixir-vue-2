var elixir = require('laravel-elixir')

// temporary hack so that we can inject additional options to
// laravel-exlixir-webpack-official
var fn = elixir.mixins.webpack
elixir.mixins.webpack = function (file, input, output, options) {
  options = options || {}

  options.resolve = options.resolve || {}
  options.resolve.alias = options.resolve.alias || {}
  options.resolve.alias.vue = 'vue/dist/vue.js'

  options.vue = options.vue || {}
  options.vue.loaders = options.vue.loaders || {}
  options.vue.loaders.js = options.vue.loaders.js || 'buble'

  return fn.call(this, file, input, output, options)
}

elixir.ready(function () {
  elixir.config.js.webpack.loaders.push(
    {
      test: /\.vue$/,
      loader: 'vue'
    },
    {
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      loader: 'file',
      query: {
        limit: 10000,
        name: '../img/[name].[hash:7].[ext]'
      }
    },
    {
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      loader: 'url',
      query: {
        limit: 10000,
        name: '../fonts/[name].[hash:7].[ext]'
      }
    }
  )
})
