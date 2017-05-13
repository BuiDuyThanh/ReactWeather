var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=1cb31d36a2f04f0451d030b9a9996e48&units=imperial';


//1cb31d36a2f04f0451d030b9a9996e48

module.exports = {
	getTemp: function (location) {
		var encodedLocation = encodeURIComponent(location);
		var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

		return axios.get(requestUrl).then(function (res) {
			if (res.data.cod && res.data.message) {
				throw new Error(res.data.message);
			} else {
				return res.data.main.temp;
			}
		}, function (res) {
			throw new Error(res.data.message);
		});
	}
}