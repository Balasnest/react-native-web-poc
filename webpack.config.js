const path = require('path');
const webpack = require('webpack');

// This is needed for webpack to import static images in JavaScript files
const imageLoaderConfiguration = {
    test: /\.(gif|jpe?g|png|svg)$/,
    loader: 'url-loader',
    query: { name: '[name].[hash:16].[ext]' }
};

const fileLoaderConfiguration = {
    test: /\.(png|jpg|gif)$/,
    loader: 'file-loader',
    options: {
        name: '[path][name].[ext]'
    }
}

// Add module which compile new JS code into old browser.
module.exports = {
    entry: ["babel-polyfill", "./entry.js"],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ["env", "stage-0", "react"]
                },
            },
            imageLoaderConfiguration,
            fileLoaderConfiguration,
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurrenceOrderPlugin()
    ],
    resolve: {
        alias: {
            "react-native": "react-native-web",
        }
    }
};