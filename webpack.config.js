const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {

    mode:"development",

    devtool:"source-map",

    entry: "./src/index.js",

    // Output

    output:{
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename:"images/[hash][ext][query]",
        filename: 'bundle.[contenthash].js'
    },


    module:{
        rules: [           
            

            // Images
            {
                test: /\.(png|jpe?g|gif|svg)/i,
                type: "asset",
                // parser: {
                //     dataUrlCondition : {
                //         maxSize: 1 * 1024,
                //     }
                // }
            },

            // CSS SASS SCSS
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: { publicPath : "" },
                    },
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
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template:"./src/index.html"
        })

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
};