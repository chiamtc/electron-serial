

require('dotenv').config({path: '.env-prod'})
// this package automatically inject javascript and css into a html file
const HtmlWebpackPlugin = require('html-webpack-plugin');
// extracting sass and css to a seperated file
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const fs = require('fs');
const webpack = require("webpack");
const nodeModules = {};
fs.readdirSync('node_modules')
    .filter(function(x) {
        return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function(mod) {
        nodeModules[mod] = 'commonjs ' + mod;
    });

const AppName = "ele";

module.exports = {
    //externals: nodeModules,
   /* externals: [
        (function () {
            var IGNORES = [
                'electron'
            ];
            return function (context, request, callback) {
                if (IGNORES.indexOf(request) >= 0) {
                    return callback(null, "require('" + request + "')");
                }
                return callback();
            };
        })()
    ],*/
    entry: './src/app/index.js',
    //target:'node',
    output: {
        path: __dirname + "/stage",
        filename: 'bundle.js',
        publicPath: '/'
    },

    module: {
        rules: [
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {}
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: 'babel-loader'
            }
        ]
    },

    devServer: {
        contentBase: __dirname + "/dist",
        compress: false,
        port: 9001,
        stats: "errors-only",
        historyApiFallback: true // enable this to server index html to any invalid path
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: AppName,
            template: "./src/index.html",
            filename: "./index.html",
            minify: {
                // Build and minify all the scripts
                collapseWhitespace: true,
                collapseInlineTagWhitespace: true,
                minifyCSS:true,
                minifyJS:true
            }
        }),
        //to import electron in reactjs https://stackoverflow.com/questions/44008674/how-to-import-the-electron-ipcrenderer-in-a-react-webpack-2-setup
        new webpack.ExternalsPlugin('commonjs', [
            'electron'
        ]),
        new CopyWebpackPlugin([
            {from:'./electron/system/Audiodevice/audiodevice', to:'dist/'}
        ]),
    ]
}
