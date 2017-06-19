var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var ErrorModal = require('ErrorModal');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass ({
	getInitialState: function () {
		return {
//			location: 'Espoo',
//			temp: 88

			isLoading: false
		}
	},
	handleSearch: function (location) {
		var that = this;
		
		debugger;
		this.setState({
			isLoading: true,
			errorMessage: undefined
		});

		openWeatherMap.getTemp(location).then(function (temp) {
			that.setState({
				isLoading: false,
				location:location,
				temp:temp
			});
		}, function (e) {
			that.setState({
				isLoading: false,
				errorMessage: e.message
			});
		});

	},
	render: function () {

		var {isLoading, location, temp, errorMessage} = this.state;
//		var location = this.state.location;
//		var temp = this.state.temp;
		
		function renderMessage () {
			if (isLoading) {
				return <h3 className="text-center">Fetching weather...</h3>;
			} else if (temp && location) {
				return <WeatherMessage location={location} temp={temp}/>;
			}
		}

		function renderError () {
			if (typeof errorMessage === 'string') {
				return (
					<ErrorModal message={errorMessage}/>
				)
			}
		}

		return (
			<div>
				<h1 className="text-center">Get Weather</h1>
				<WeatherForm onSearch={this.handleSearch}/>	{/* <WeatherForm></WeatherForm> */}
				{/*<WeatherMessage location={location} temp={temp}/>*/} {/*prop=state*/}
				{renderMessage()}
				{renderError()}
			</div>
		);
	}
});

module.exports = Weather;