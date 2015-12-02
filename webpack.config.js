var path = require('path');

module.exports = {
    entry: [
      path.resolve(__dirname, 'src/app.js')
    ],
    output: {
        filename: '/app.js',
        path: __dirname + '/dist'
    },
    resolve: {
      extensions: ['', '.js', '.jsx'],
    }
};
