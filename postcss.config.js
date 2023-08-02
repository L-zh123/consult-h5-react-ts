console.log('postcss')
module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 16,
      propList: ['*']
    }
  }
}
