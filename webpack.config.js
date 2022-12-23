const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = {
    entry: path.resolve(__dirname, './src/index.js'),
    mode: "development",
    module: {
      rules: [
        {
          exclude: /(node_modules)/,
          test: /\.(js|jsx)$/i,
          use:[
            {loader: "babel-loader",
                options: {
                    presets: ['@babel/preset-env','@babel/preset-react']
                }},
          ],
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"]
        }
      ]
    },
    output: {
      filename: 'index.js',
      path: path.resolve("./dist"),
    },
    devtool: 'source-map',
    plugins: [new HtmlWebpackPlugin({
        filename: 'index.html',

        template: 'src/index.html'
    })],
    devServer: {
      compress: true,
      port: 9000
    }
  };

module.exports = config