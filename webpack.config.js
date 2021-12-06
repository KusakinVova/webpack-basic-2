const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPL = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const devServer = (isDev) => !isDev ? {} : {
  devServer: {

    // contentBase: path.join(__dirname, 'public'), // было в 4й версии
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    open: true, // чтобы открывался браузер
    hot: true, // горячая перезагрузка страницы при обновлении
    port: 9000,
  }
};

const esLintPlugin = (isDev) => isDev ? [] : [
  new ESLintPlugin({
    extensions: ['ts', 'js'] // какие файлы проверять
  }),
];

module.exports = ({develop}) => ({
  mode: develop ? 'development' : 'production',
  devtool: develop ? 'inline-source-map' : false,
  entry: {
    app: './src/index.ts',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    assetModuleFilename: 'assets/[hash][ext]',
  },
  module: {
    rules: [
      {
        test: /\.[tj]s$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        // test: /\.(png|svg|jpg|jpeg|gif)$/i, // base config
        // type: 'asset/resource', // base config
        test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
        // use: 'css-loader',
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        // use: 'css-loader',
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.ts'],
  },
  plugins: [
    // new HtmlWebpackPlugin(), // Generates default index.html
    new HtmlWebpackPlugin({  // Also generate a test.html
      title: 'demo webpack',
      filename: './index.html',
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      // linkType: "text/css",
      filename: '[name].[contenthash].css'
    }),
    new CopyPL({
      patterns: [
        {from: './public'} // будут ошибки если эта папка пустая
      ]
    }),
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false, // чтобы не удалял Assets
    }),
    ...esLintPlugin(develop),
    // new ESLintPlugin({
    //   extensions: ['ts', 'js'] // какие файлы проверять
    // }),
    // new WebpackObfuscator ({rotateStringArray: true}, ['excluded_bundle_name.js']),
  ],
  ...devServer(develop),
});
