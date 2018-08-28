const minimist = require('minimist');
const options = minimist(process.argv.slice(2));
const isProduction = (() => {
  const env = options.env;

  return env === undefined ? false : env.startsWith('prod');
})();

if (isProduction) {
  console.log('Enable production mode.');
}

let config = {
  console_options: options,
  isProduction: isProduction,

  src: {
    js: './src/js/**/*.js',
    vue: {
      // src : dist
      './src/js/app.js': 'app.js',
      './src/js/train-number-calc.js': 'train-number-calc.js',
    },
    vue_watch: './src/js/**/*.{js,vue}',
    eslint: './src/js/**/*.{js,vue}',
    scss: './src/scss/**/*.scss',
    lib: {
      js: [
        './node_modules/jquery/dist/jquery.slim.min.js',
        './node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
      ],
    },
  },

  dist: {
    js: './assets/js',
    css: './assets/css',
  },

  map: './.map',

  lib: {
    js: 'lib.js',
  },

  options: {
    eslint: {
      configFile: '.eslintrc.js',
    },
  },

  plugins: require('gulp-load-plugins')(),
};

module.exports = config;
