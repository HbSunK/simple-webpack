const path = require('path')
const Sparrow = require('./plugins/sparrow')
const HtmlPackPlugins = require('./plugins/htmlPackPlugins')

module.exports = {
    mode: 'development',
    entry: {
        index: path.resolve(__dirname, './src/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    modules: {
        rules: [{
            test: /\.(css|less)$/,
            use: [
                path.resolve(__dirname, 'loaders', 'style-loader.js'),
                path.resolve(__dirname, 'loaders', 'less-loader.js'),
            ]
        }]
    },
    plugins: [
        new Sparrow(),
        new HtmlPackPlugins({
            template: './public/index.html',
            filename: 'index.html'
        })
    ]
}