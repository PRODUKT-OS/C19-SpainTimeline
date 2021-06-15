const path = require('path')

module.exports = {
    //target: 'node',
    //node: {global: true},
    context: __dirname,
    entry: './public/page.logic.ts',//'./src/controllers/user.controller.ts',//
    output: {
        path: path.resolve(__dirname + '/public/comp'),
        filename: 'bundle.js',
        publicPath: '/public/'
    },
    module:{
        rules:[
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: {
                    loader: 'ts-loader'
                }
            }
        ]
    },
    resolve: {
        extensions: ['.ts','.tsx','.js']
    }
}