var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
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
		this.setState({isLoading: true});

		openWeatherMap.getTemp(location).then(function (temp) {
			that.setState({
				isLoading: false,
				location:location,
				temp:temp
			});
		}, function (errorMessage) {
			that.setState({isLoading: false});
			alert(errorMessage);
		});

	},
	render: function () {

		var {isLoading, location, temp} = this.state;
//		var location = this.state.location;
//		var temp = this.state.temp;
		
		function renderMessage () {
			if (isLoading) {
				<h3>Fetching weather...</h3>;
			} else if (temp && location) {
				return <WeatherMessage location={location} temp={temp}/>;
			}
		}

		return (
			<div>
				<h3>Weather Component</h3>
				<WeatherForm onSearch={this.handleSearch}/>	{/* <WeatherForm></WeatherForm> */}
				{/*<WeatherMessage location={location} temp={temp}/>*/} {/*prop=state*/}
				{renderMessage()}
			</div>
		);
	}
});

module.exports = Weather;