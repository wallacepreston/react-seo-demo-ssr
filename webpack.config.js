module.exports = {
  entry: {
    client: './src/client.js',
    bundle: './src/bundle.js'
  },
  mode: 'development',
  output: {
    path: __dirname,
    filename: '[name].js'
  },
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
