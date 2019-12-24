var path = require('path');

module.exports = {
    entry: './child.js',
    output: {
        filename: 'build.js',
        path: path.resolve(__dirname + '/dist'),
    },
    module: {
        rules: [
            // {
            //     test: /.\vue$/,
            //     loader: 'vue-loader'
            // },
            // {
            //     test: /.\js$/,
            //     loader: 'babel-loader'
            // }
        ]
    }
}