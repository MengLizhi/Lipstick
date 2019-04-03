const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  chainWebpack(config) {
    config.resolve.alias
      .set('components', resolve('src/components'))
      .set('assets', resolve('src/assets'))
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    proxy: 'http://47.96.91.208'
  }
}