var path = require('path');
var production = 'a'

console.log(path.resolve(__dirname, './dist'))
module.exports = {
    entry: './home.js',
    output: {
      path: path.resolve(__dirname, './dist'),
      publicPath: '/dist/',
      filename:'build.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    }

}


