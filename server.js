const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');
const PORT = process.env.PORT || 8080;
new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000,
    ignored: /node_modules/
  },
  hot: true,
  historyApiFallback: true
}).listen(PORT, () => {
  console.log("Tweeter app listening on port " + PORT);

});
