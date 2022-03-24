const p = require('path')
const nodeExternals = require('webpack-node-externals')

const src_path = p.resolve(__dirname, '..', 'src')

module.exports = {
    entry: p.resolve(src_path, 'main.ts'),
    target: 'node',
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                include: [p.resolve(__dirname, '..', 'src')],
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
        alias: {
            '@server': p.resolve(src_path, 'app', 'server'),
            '@interface': p.resolve(src_path, 'app', 'interface'),
            '@database': p.resolve(src_path, 'app', 'database'),
            '@routes': p.resolve(src_path, 'app', 'routes'),
            '@services': p.resolve(src_path, 'app', 'services'),
        },
    },
    output: {
        filename: 'bundle.js',
        path: p.resolve(__dirname, '..', './dist'),
    },
    stats: 'errors-only',
}
