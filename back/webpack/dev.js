const Nodemon = require('nodemon-webpack-plugin')
const Eslint = require('eslint-webpack-plugin')
const { DefinePlugin } = require('webpack')
require('dotenv').config({path: '.env.development'})

module.exports = {
    mode: 'development',
    devtool: 'eval-source-map',
    watch: true,
    plugins: [
        new Nodemon(),
        new Eslint(),
        new DefinePlugin({
            'process.env': JSON.stringify(process.env)
        })
    ]
}