const path = require('path');
const CleanPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: 'production',
    // 入出力
    entry: './src/app.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist',
    },
    // ローダー
    module: {
        rules: [
          {
            test: /\.ts$/,
            use: 'ts-loader',
            exclude: /node_modules/,
          },
        ],
    },
    // インポート時の拡張子
    resolve: {
        extensions: ['.ts', '.js'],
    },
    // モジュールはファイル単位→プラグインは全体に係る
    plugins: [
      // ファイルを生成する前に、distフォルダを空にする
      new CleanPlugin.CleanWebpackPlugin(),
    ],
};