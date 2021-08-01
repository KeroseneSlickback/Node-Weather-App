const request = require('request');

// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

const forecast = (lat, long, callback) => {
	const url =
		'http://api.weatherstack.com/current?access_key=463cd8a8348e05bd73cfb4d0562695c3&query=' +
		lat +
		',' +
		long +
		'&units=f';

	request({ url, json: true }, (error, { body }) => {
		if (error) {
			callback('Unable to connect to weather service', undefined);
		} else if (body.error) {
			callback('Unable to connect to weather service', undefined);
		} else {
			callback(
				undefined,
				`In ${body.location.name}, it is currently ${body.current.temperature}F and feels like ${body.current.feelslike}F.`
			);
		}
	});
};

module.exports = forecast;
