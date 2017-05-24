 const glob = require('glob');

 module.exports = {
    entry: {
    	// singleEntry : [
	    // 	'./source/index.js',
	    // 	'./source/constant.js'
	    // ]
	    'myPages': glob.sync('./source/**/*.js'),
 	},
    output: {
        path: './build',
        filename: 'app.bundle.js'
    },
    module: {
     	loaders: [{
     		test: /\.js$/,
     		exclude: /node_modules/,
     		loader: 'babel-loader'
     	}]
     }
 };
