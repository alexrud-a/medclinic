let mix = require('laravel-mix');

mix.extract(['vue'], 'dist/js/libs.js')
    .js('src/js/app.js', 'dist/js')
    .sass('src/css/app.sass', 'dist/css').options({processCssUrls: false});