
const path = require('path');
const { CheckerPlugin } = require('awesome-typescript-loader')


module.exports = {
    entry: './tya.ts',
    output: {
        path: path.resolve(__dirname + '/abc'),
        filename: 'build-ts.js'
    },
    module: {
        rules: [

            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }

        ]
    },
    plugins: [
        new CheckerPlugin()
    ]
}



