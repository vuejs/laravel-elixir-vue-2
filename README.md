# laravel-elixir-vue-2

> Laravel Elixir 6 support for Vue 2.0

This package provides Webpack support for compiling Vue 2.0 `.vue` files in your Laravel Elixir 6 projects. Please note that, if using Laravel Elixir 5 or below, you don't want this package.

Usage is identical to [laravel-elixir-vue](https://github.com/JeffreyWay/laravel-elixir-vue):

## Step 1: Install

```
npm install laravel-elixir-vue-2 --save-dev
```

## Step 2: Gulpfile.js

``` js
var elixir = require('laravel-elixir')

require('laravel-elixir-vue-2')

elixir(function(mix) {
  mix.webpack('app.js'); // resources/assets/js/app.js
})
```

## Extending/Modifying the Default Config

From Elixir's docs:

> If you'd like to leverage more of Webpack's functionality, Elixir will read any webpack.config.js file that is in your project root and factor its configuration into the build process.

For example, to make Vue use `sass-loader` for `<style lang="scss">`:

``` js
// webpack.config.js
module.exports = {
  vue: {
    loaders: {
      js: 'buble-loader',
      scss: 'vue-style-loader!css-loader!sass-loader'
    }
  }
}
```

## Using Spread Operator

The [Object spread operator](https://github.com/sebmarkbage/ecmascript-rest-spread) requires `Object.assign` to be available. Make sure to [polyfill it](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#Polyfill) if you target browsers that don't support it yet.
