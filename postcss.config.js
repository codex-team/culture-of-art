module.exports = {
  parser: 'postcss',
  plugins: [
    require('postcss-nested')(),
    require('postcss-cssnext')(),
    require('postcss-inline-svg')(),
    require('postcss-minimize')(),
  ],
  map: false,
}
