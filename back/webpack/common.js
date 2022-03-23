const { resolve } = require('path')
const NodeExternals = require('webpack-node-externals')

const src_path = resolve(__dirname, '..', 'src')

module.exports = {
    entry: resolve(src_path, 'main.ts'),
    target: 'node',
    externals: [
        new NodeExternals(),
    ],
    module: {
        rules: [{
            test: '/\.ts$/',
            use: 'ts-loader'
        }]
    },
    output: {
        filename: 'bundle.js',
        path: resolve(src_path,'..', 'dist')
    },
    resolve: {
        alias: {
            "@database": resolve(src_path, 'app', 'database'),
            "@interface": resolve(src_path, 'app', 'interface'),
            "@server": resolve(src_path, 'app', 'server'),
            "@routes": resolve(src_path, 'app', 'routes')        
        }
    },
    stats: 'errors-only'
}