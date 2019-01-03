const path = require('path')
const commonConfig = {
  mode: 'development',
  devtool: 'source-maps',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ]
      }
    ]
  }
}

const clientConfig = {
  ...commonConfig,
  name: 'client',
  entry: path.join(__dirname, 'client'),
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  }
}


module.exports = clientConfig
