var path = require('path')
function resolve(dir) {
    return path.join(__dirname, './', dir);
  }
  const { VueLoaderPlugin } =  require('vue-loader')
module.exports = {
   entry: './src/a.vue',
  // entry: './home.js',
    output: {
        filename: 'build.js',
        publicPath:'/dist/',
        path: path.resolve(__dirname + '/dist')
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
              },
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
    ]
}