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
          loader: ["style-loader", "css-loader"],
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
                modules:true
              }
            },
            {
              loader: "sass-loader",
              options: {
                // Prefer `dart-sass`
                implementation: require.resolve("sass"),
                sourceMap: true,
                sassOptions: {
                  outputStyle: "compressed"
                },
              },
            },
            {
              loader: 'sass-resources-loader',
              options: {
                // Provide path to the file with resources
                resources: [
                  '../src/assets/sass/main.scss'
                ]
              },
            },
          ],
        },
      ],
    },
};