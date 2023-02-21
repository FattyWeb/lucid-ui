const path = require('path')
const baseWebpackConfig = require('../webpack.base.js')
const merge = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = merge(baseWebpackConfig, {
  entry: {
    'Lucid': './src/index.ts',
    'Lucid.min': './src/index.ts',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(process.cwd(), 'dist'),
    publicPath: '/dist/',
    library: 'Lucid',
    libraryTarget: 'umd',
    libraryExport: 'default',
    umdNamedDefine: true,
    globalObject: 'typeof self !== \'undefined\' ? self : this'
  },
  plugins:[
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: "src/index.d.ts", to({ context, absoluteFilename }) {
            return "Lucid.d.ts";
          },},
      ],
    })
  ]
})
