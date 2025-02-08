const path = require('path');

module.exports = {
  entry: '/src/server/index.js', // Entry point of your application
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js', // Output bundle file
  },
  mode: 'production', // Set mode to 'production' for optimized builds
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Ensures compatibility with older browsers
        },
      },
      {
        test: /\.css$/, // Handling CSS files
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.html$/, // Handle HTML files
        use: 'html-loader',
      },
    ],
  },
  plugins: [
    // Add any necessary plugins, like CleanWebpackPlugin to clean the dist folder
  ],
};

