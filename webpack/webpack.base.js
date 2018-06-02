module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.scss']
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env', 'react'],
          plugins: [
            'add-module-exports'
          ]
        }
      }
    }]
  }
};
