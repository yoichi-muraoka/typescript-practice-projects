const path = require('path');

module.exports = {
    mode: 'development',
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
    // 開発用サーバー
    devServer: {
        static: [
          {
            directory: path.resolve(__dirname, 'dist'),
            publicPath: '/dist'
          },
          {
            directory: __dirname,
            publicPath: '/',
          },
        ],
        open: true,
    },
};