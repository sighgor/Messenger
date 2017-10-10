var path = require("path");

var output = path.resolve("../../wwwroot/");

module.exports = {
    output: {
        path: output,
        publicPath: "/",
        filename: './js/[name].bundle.js'
    },
    entry: "./client.entry.tsx",
    resolve: {
        extensions: ['.js', '.ts', '.tsx']
    },
    devServer: {
        contentBase: "/wwwroot/",
        port: 8080,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        }
    },
    module: {
        rules: [{
                test: /\.ts$/,
                use: 'ts-loader'
            },
            {
                test: /\.tsx$/,
                use: 'ts-loader'
            }
        ]
    }
}