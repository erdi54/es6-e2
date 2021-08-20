module.exports ={
    entry: './assets/js/scripts.js',
    output:{
        path:__dirname + '/public/js',
        filename:'bundle.js'

    },
    mode: 'development',
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader',
                    options: {
                        presets: ["@babel/preset-env"]  //Preset used for env setup
                    }
                }
            }
        ]
    }
}
