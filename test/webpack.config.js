var webpack = require('webpack'),
    path = require('path');

module.exports = {
    context: __dirname,
    entry: './fixtures/loader.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, './fixtures')
    },
    performance: { hints: false },
    optimization: { minimize: false }
};
