const path = require("path");

module.exports = {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Process both .js and .jsx files
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/, // Enables support for CSS files
        use: ["style-loader", "css-loader"],
      },
      {
        // Process SVG files using @svgr/webpack
        test: /\.svg$/,
        use: ['@svgr/webpack']
      }

    ],
  },
  resolve: {
    extensions: [".js", ".jsx"], // Ensure Webpack resolves JSX files
  },
  
};
