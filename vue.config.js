const { pages, port, baseUrl } = require('./config');
module.exports = {
  pages,
  publicPath: baseUrl,
  devServer: {
    port,
    disableHostCheck: true
  },
  configureWebpack: {
    plugins: []
  }
};
