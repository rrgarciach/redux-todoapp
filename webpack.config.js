const webpack = require('webpack');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:8080', // URL for hot reload
        'webpack/hot/only-dev-server', // Reload only dev server
        './src/index.js'
    ],
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loaders: ['babel'] // Include react hot reloader
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dist',
        hot: true // Activate hot reloading
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin() // Attach the hot reloading plugin
    ]
};