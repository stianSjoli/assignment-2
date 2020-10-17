const path = require('path');

module.exports = {
    entry: './src/index.jsx',
    output: {
        filename: 'index.jsx',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        contentBase:path.join(__dirname, 'dist'),
        compress:true,
        port:9000,
        publicPath: '/',
        historyApiFallback:true
    },
    performance: {
        hints: 'warning'
    },
    module: {
        rules: [
            {
                test:/\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test:/\.(css)$/,
                exclude: /node_modules/,
                use: ["style-loader", "css-loader"]
            }
        ]
    }
};
