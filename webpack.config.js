const glob = require('glob')
const path = require('path')

module.exports = {
  mode: 'development',
    entry: glob.sync('./src/**/start.js').reduce((acc, path) => {
        const entry = path.replace('/start.js', '')
        acc[entry] = path
        return acc
    }, {}),

    output: {
        filename: './[name]/main.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        }
      ]
    },
    devtool: "source-map"
}
