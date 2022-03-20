const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {

    mode:"development",

    devtool:"source-map",

    entry: "./src/index.js",

    module:{
        rules: [
            // CSS SASS SCSS
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ],
            },

            // JS / JSX
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            },

        ]
    },

    plugins:[
        new MiniCssExtractPlugin(),
    ],

    resolve:{
        extensions:[".js", ".jsx"]
    },

    devServer:{
        static:[
            {
                directory: path.join(__dirname, 'dist'),
            },
        ],

        hot:true,
    }
}