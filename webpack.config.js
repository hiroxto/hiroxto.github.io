const path = require('path');
const NODE_ENV = process.env.NODE_ENV;

module.exports = {
  mode: NODE_ENV || 'production',

  entry: {
    'app': './src/js/app.js',
    'train-number-calc': './src/js/train-number-calc.js',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
    },
  },
  devServer: {
    contentBase: path.resolve(__dirname, './'),
    port: 8888,
  },
};
