/* eslint-disable @typescript-eslint/no-var-requires */
const CopyPlugin = require('copy-webpack-plugin')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const dotenv = require('dotenv')
const path = require('path')
const webpack = require('webpack')
const fs = require('fs')

module.exports = () => {
  // call dotenv and it will return an Object with a parsed key
  const env = dotenv.config({
    path: path.resolve(__dirname, '../../.env'),
  }).parsed

  // reduce it to a nice object, the same as before
  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next])
    return prev
  }, {})

  const srcPath = subDirectory => {
    const srcPathRelativeToWebpackConfig = '../../src'
    return path.join(__dirname, srcPathRelativeToWebpackConfig, subDirectory)
  }

  const getFilesAndDirectories = source => fs.readdirSync(source, { withFileTypes: true }).map(dirent => dirent.name)

  let absoluteImports = {}
  getFilesAndDirectories('src').forEach(fileName => {
    const fileNameWithoutExtension = path.parse(fileName).name
    absoluteImports[`@/${fileNameWithoutExtension}`] = srcPath(fileName)
  })

  return {
    devServer: {
      historyApiFallback: true,
      hot: true,
      port: env.PORT,
    },
    devtool: 'source-map',

    externals: {
      react: 'React',
      'react-dom': 'ReactDOM',
    },

    module: {
      rules: [
        {
          exclude: /node_modules/,
          test: /\.ts(x?)$/,
          use: [
            {
              loader: 'ts-loader',
              options: {
                configFile: path.resolve(__dirname, '../../tsconfig.json'),
                transpileOnly: true,
              },
            },
          ],
        },
        {
          enforce: 'pre',
          loader: 'source-map-loader',
          test: /\.ts(x?)$/,
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader',
            },
          ],
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif|ico|webp)$/,
          use: ['file-loader'],
        },
      ],
    },

    output: {
      filename: '[name].[hash].js',
      path: path.resolve(__dirname, '../../dist'),
      publicPath: '/',
    },

    plugins: [
      new CopyPlugin({
        patterns: [{ from: 'public/robots.txt', to: 'robots.txt' }],
      }),
      new HtmlWebPackPlugin({
        favicon: './public/assets/images/favicon.ico',
        filename: './index.html',
        template: './public/index.html',
      }),
      new webpack.DefinePlugin(envKeys),
      new webpack.ProvidePlugin({
        React: 'react',
      }),
    ],

    resolve: {
      alias: {
        ...absoluteImports,
      },
      extensions: ['.ts', '.tsx', '.js', 'jsx'],
    },
    // IMPORTANT: Adding watchOptions after updating from webpack version 4 to 5 allows
    // HMR & LiveReload to work. We have also updated webpack-dev-server from v3.11.2 to v4.0.0-beta.1.
    watchOptions: {
      ignored: /node_modules/,
      poll: true,
    },
  }
}
