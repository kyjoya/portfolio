var webpack = require('webpack');

module.exports = {
  entry: {
    path: './src/main.js'
  },
  output: {
    path: __dirname+'/build',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
         test: /\.(png|svg|jpg|gif)$/,
         use: [
           {
             loader: 'file-loader'
           }
         ]
       }
    ]
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: './build',
    inline: true
  }
}
