let mix = require('laravel-mix');

mix.copy('node_modules/vue/dist/vue.js', 'dist/js')
    .js('src/js/app.js', 'dist/js')
    .sass('src/css/app.sass', 'dist/css').options({processCssUrls: false});