var path = require('path');

module.exports = {
    entry: [
      'webpack-dev-server/client?http://localhost:8080',
      path.resolve(__dirname, 'src/app.js')
    ],
    output: {
        filename: '/app.js',
        path: __dirname + '/dist'
    },
    module: {
      loaders: [
        { test: /\.js$/, exclude: /node_modules/, loader: 'babel',query: {
          presets: ['es2015']
        }}
      ]
    }
};
