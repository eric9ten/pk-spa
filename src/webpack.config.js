var webpack = require('webpack');
const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
    module: {
      rules: [
        {
          test: /\.css$/,
          loader: ["style-loader", "css-loader", "sass-loader"],
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            // Creates `style` nodes from JS strings
            "style-loader",
            // Translates CSS into CommonJS
            {
              loader: "css-loader",
              options: {
                sourceMap: true,
              }
            },
            {
              loader: "sass-loader",
              options: {
                // Prefer `dart-sass`
                additionalData: `@import "./assets/sass/main.scss";`,
                implementation: require.resolve("sass"),
                sourceMap: true,
                sassOptions: {
                  outputStyle: "compressed"
                },
              },
            },
          ],
        },
      ],
    },
};