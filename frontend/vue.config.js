// let publicPath = process.env.NODE_ENV === 'production' ? 'http://188.166.181.108:5000/' : '/';

// module.exports = {
//   publicPath,
//   productionSourceMap: false,
// };

module.exports = {
  devServer: {
    proxy: 'http://localhost/pools'
  },
  outputDir: '../public',

  indexPath: process.env.NODE_ENV === 'production'
    ? '../application/views/home.php'
    : 'index.html'
}
