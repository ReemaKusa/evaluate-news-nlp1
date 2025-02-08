const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = {
  // other configurations...
  resolve: {
    fallback: {
      "stream": require.resolve("stream-browserify"),
      "url": require.resolve("url"),
      "util": require.resolve("util"),
      "zlib": require.resolve("browserify-zlib"),
    }
  },
  stats: {
    errorDetails: true,  // This will show detailed error information in the console
  },
  plugins: [
    new NodePolyfillPlugin()
  ]
};
