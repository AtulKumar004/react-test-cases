module.exports = {
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.svg$/,
          use: "file-loader",
        },
      ],
    },
    resolve: {
      extensions: [".js", ".jsx"],
    },
  };
  