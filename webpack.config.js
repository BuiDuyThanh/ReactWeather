module.exports = {
	entry: './app/app.jsx',			// input
	output: {							// output
		path: __dirname,
		filename: './public/bundle.js'
	},
	resolve: {
		root: __dirname,
		alias: {
			Main: 'app/components/Main.jsx',
			Nav: 'app/components/Nav.jsx',
			Weather: 'app/components/Weather.jsx',
			WeatherForm: 'app/components/WeatherForm.jsx',
			WeatherMessage: 'app/components/WeatherMessage.jsx',
			About:  'app/components/About.jsx',
			Examples: 'app/components/Examples.jsx',
			openWeatherMap: 'app/api/openWeatherMap.jsx'
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