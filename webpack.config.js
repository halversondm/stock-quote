'use strict';

var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var StatsPlugin = require('stats-webpack-plugin');
var path = require('path');

var inDevelopment = process.env.NODE_ENV === 'development';
console.log("Running webpack in development mode? " + inDevelopment);

/**
 * Create a base configuration that applies in dev and production.
 */
var baseConfig = {
    context: path.join(__dirname, '/app'),
    output: {
        filename: '[name]-[hash].js',
        path: path.join(__dirname, '/dist'),
        publicPath: '/'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new HtmlWebpackPlugin({
            template: 'index.tpl.html',
            inject: 'body',
            filename: 'index.html'
        }),
        new ExtractTextPlugin('[name]-[hash].min.css'),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: /app/,
                loader: 'babel'
            },
            {test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css')},
            {test: /\.(ttf|eot|woff2|svg|png|woff)$/, loader: 'file?name=[name].[ext]'}
        ]
    }
};

/**
 * Add in environmental options
 */
if (inDevelopment === true) {
    baseConfig.entry = ['webpack-hot-middleware/client?reload=true', './main.js'];
    baseConfig.devtool = 'eval-source-map';
    baseConfig.plugins.push(new webpack.HotModuleReplacementPlugin());
    baseConfig.plugins.push(new webpack.NoErrorsPlugin());
} else {
    baseConfig.entry = ['./main.js'];
    baseConfig.plugins.push(new StatsPlugin('webpack.stats.json', {
        source: false,
        modules: false
    }));
    baseConfig.plugins.push(new webpack.optimize.UglifyJsPlugin({
        compressor: {
            warnings: false,
            screw_ie8: true
        }
    }));
}
module.exports = baseConfig;
