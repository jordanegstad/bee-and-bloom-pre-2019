var res = {
    root: __dirname,
    alias: {
      'masonry': 'masonry-layout',
      'isotope': 'isotope-layout'
    }
};



var mod = {
    loaders: [
        {
            test: /js_src\/.*\.js$/,
            exclude: /node_modules|js_libs/,
            loaders: ["babel-loader"]
        },

        // {
        //     test: /vendor\/.+\.(jsx|js)$/,
        //     loader: 'imports?jQuery=jquery,$=jquery,this=>window'
        // },
        //
        // {
        //     test: /vendor\/.+\.(jsx|js)$/,
        //     loader: 'expose?jQuery!expose?$'
        // },
    ]
};



var app = {
    resolve: res,


    entry: {
        app: "./js_src/app.js"
    },


    output: {
        path: "./web_template/js/",
        filename: "app.js"
    },


    module: mod
};



var sqs = {
    resolve: res,


    entry: {
        app: "./js_src/app-sqs.js"
    },


    output: {
        path: "./template/scripts/",
        filename: "app.js"
    },


    module: mod
};



module.exports = [
    app,
    sqs
];
