var webpack = require('webpack');

module.exports = {
	entry: [					// input executed from top to bottom
		'script!jquery/dist/jquery.min.js',
		'script!foundation-sites/dist/foundation.min.js',
		'./app/app.jsx'
	],
	externals: {
		jquery: 'jQuery'
	},
	plugins: [						
		new webpack.ProvidePlugin({		// webpack config to enable jQuery
			'$': 'jquery',
			'jQuery': 'jquery'
		})
	],
	output: {							// output
		path: __dirname,
		filename: './public/bundle.js'
	},
	resolve: {			// with resolve we can require file without declare file extension. For example: require('./logger');
		root: __dirname,
		alias: {
			Main: 'app/components/Main.jsx',
			Nav: 'app/components/Nav.jsx',
			Weather: 'app/components/Weather.jsx',
			WeatherForm: 'app/components/WeatherForm.jsx',
			WeatherMessage: 'app/components/WeatherMessage.jsx',
			About:  'app/components/About.jsx',
			Examples: 'app/components/Examples.jsx',
			openWeatherMap: 'app/api/openWeatherMap.jsx',
			ErrorModal: 'app/components/ErrorModal.jsx',
			applicationStyles: 'app/styles/app.scss'
		},
		extensions: ['', '.js', '.jsx']	// file extensions
	},
	module: {
		loaders: [
			{
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015', 'stage-0']
				},
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/	// ignore folders
			}
		]
	},
	devtool: 'inline-source-map'	// use source for debugging
};