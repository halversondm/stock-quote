'use strict';
var path = require('path');
var express = require('express');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.config.js');
var inDevelopment = process.env.NODE_ENV === 'development';
var port = 3000;
var app = express();

if (inDevelopment) {
    var compiler = webpack(config);
    var middleware = webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath,
        contentBase: 'app',
        stats: {
            colors: true,
            hash: false,
            timings: true,
            chunks: false,
            chunkModules: false,
            modules: false
        }
    });
    app.use(middleware);
    app.use(webpackHotMiddleware(compiler));

} else {
    app.use(express.static(__dirname + '/dist'));
}

app.listen(port, 'localhost', function (err) {
    if (err) {
        console.log(err);
    }

    console.info('==> Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
});
