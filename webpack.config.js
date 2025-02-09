const path = require('path');

module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/,       // Add this rule to process CSS files
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack']
      },
       // Process image files
       {
        test: /\.(png|jpe?g|gif|webp|svg)$/i,
        type: 'asset/resource',
        // Alternatively, you can use file-loader if preferred:
        // use: [
        //   {
        //     loader: 'file-loader',
        //     options: {
        //       name: '[name].[hash].[ext]',
        //       outputPath: 'images',
        //     },
        //   },
        // ],
      },
      // other rules like for SVGs, etc.
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
};
