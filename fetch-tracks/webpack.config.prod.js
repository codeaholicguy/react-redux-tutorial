: 'app.[hash].js'
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'react-hot!babel'
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      __CLIENT_ID__: JSON.stringify(process.env.CLIENT_ID || ''),
      __REDIRECT_URI__: JSON.stringify(process.env.REDIRECT_URI || ''),
      'process.env.NODE_ENV': '"production"'
    }),
    new webpack.optimize.DedupePlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: true,
      minify: {
        collapseWhitespace: true,
        minifyCSS: true
      }
    })
  ]
}
