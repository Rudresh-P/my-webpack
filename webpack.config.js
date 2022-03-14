const path = require('path');

module.exports = {

    mode:"development",

    devtool:"source-map",

    module:{
        rules:[
            {// babel loader
                test: /\.js/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            },
        ]
    },

    devServer:{
        static:[
            {
                directory: path.join(__dirname, 'dist'),
            },
        ],

        hot:true
    }
}