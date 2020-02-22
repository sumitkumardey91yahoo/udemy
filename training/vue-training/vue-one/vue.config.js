// vue.config.js
module.exports = {
  configureWebpack: config => {
    console.log("done",process.env.NODE_ENV)
    if (process.env.NODE_ENV === 'production') {
      // mutate config for production...
 
    } else {
      // mutate for development...
    }
  }
}