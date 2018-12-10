const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src',
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {// run linter before babel, by using enforce: "pre"
        test: /\.(js|ts)x?$/, loader: 'eslint-loader', enforce: 'pre', exclude: /node_modules/,
      },
      { test: /\.(js|ts)x?$/, loader: 'babel-loader' },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: true, // inject scrips/assets at bottom of body
      hash: true,
      showErrors: true,
    }),
  ],
  // for webpack-dev-server
  devServer: {
    contentBase: './dist',
    overlay: true,
  },
  devtool: 'inline-source-map',
  mode: 'development',
};
