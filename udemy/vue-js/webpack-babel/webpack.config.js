const path = require('path');

module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'build.js'
    },
    module:{
        rules: [ 
            {
                test: /\.js$/,
                loader: 'babel-loader'
            }

        ]
    }
}