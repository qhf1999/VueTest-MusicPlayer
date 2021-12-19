const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}


module.exports = {
  lintOnSave: false,
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [resolve('src/styles/var.less'),
      resolve('src/styles/mixin.less')]
    }
  }
}
