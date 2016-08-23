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
