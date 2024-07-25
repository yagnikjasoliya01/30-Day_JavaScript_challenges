const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename:'bundle.js',
        path: path.resolve(__05_Module_bundling, 'dist')
    },
    mode: 'development'
}