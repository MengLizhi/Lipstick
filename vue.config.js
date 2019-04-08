const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  // assetsDir: 'static',
  // indexPath: 'static',
  chainWebpack(config) {
    config.resolve.alias
      .set('components', resolve('src/components'))
      .set('assets', resolve('src/assets'))
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist/'),
    // https: {
    //   key: fs.readFileSync("./path/server.key"),
    //   cert: fs.readFileSync("./path/ca.crt"),
    // },
    https: true,
    disableHostCheck: true,
    port: 443,
    // proxy: 'https://zy.stark.wiki/'
  }
}