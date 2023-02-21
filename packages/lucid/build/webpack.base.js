const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')
const pkg = require('../package.json')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const WebpackBar = require('webpackbar');

module.exports = {
  mode: 'production',
  stats: 'errors-only',
  externals: {
    vue: {
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue',
      root: 'Vue'
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        exclude: /node_modules/,
        loader: [
          {
            loader: 'babel-loader',
           },
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              happyPackMode: false
            }
          }
        ],
      },
      {
        test: /\.(svg)$/,
        loader: 'url-loader'
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
              sassOptions: {
                // fiber: require('fibers'),
                indentedSyntax: true,
                outputStyle: 'expanded'
              },
            },
          }
        ]
      }
    ],
  },
  plugins: [
    new WebpackBar(),
    new webpack.BannerPlugin({
      banner: `/*!
                * Lucid v${pkg.version} 🖖 (https://github.com/FattyWeb/lucid-ui/)
                * Forged by dw.zhang
                * Released under the MIT License.
                * © 2022, sztx. (http://xiangleba.com.cn/)
                */`,
      raw: true,
      entryOnly: true
    }),
  ],
  resolve: {
    extensions: [ '.tsx', '.ts', '.js', '.sass', '.scss' ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new UglifyJsPlugin({
        include: /(min|index)\.js$/,
      }),
      new OptimizeCSSAssetsPlugin({
        assetNameRegExp: /(min|style)\.css$/g,
        cssProcessor: require('cssnano'),
      })
    ]
  }
}
