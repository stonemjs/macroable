const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = (env) => {
  return {
    mode: env.prod ? 'production' : 'development',
    entry: path.resolve(__dirname, './src/index.mjs'),
    devtool: env.dev && 'inline-source-map',
    plugins: [
      new CleanWebpackPlugin(),
    ],
    output: {
      libraryTarget: 'umd',
      filename: 'index.js',
      globalObject: 'this',
      library: 'StoneJSMacrobale',
      path: path.resolve(__dirname, 'dist'),
    },
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: 'babel-loader',
        },
      ]
    }
  }
}
