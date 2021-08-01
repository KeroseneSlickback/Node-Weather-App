const request = require('request');

const geocode = (address, callback) => {
	const url =
		'https://api.mapbox.com/geocoding/v5/mapbox.places/' +
		encodeURIComponent(address) +
		'.json?access_token=pk.eyJ1IjoiY29weWR1bXB3aWxsIiwiYSI6ImNrcnI2aDloejJ1NDcyd2tkeW5jNm53c2sifQ.9-JCluWbzkhFcE3oyUQamA&limit=1';

	request({ url, json: true }, (error, { body } = {}) => {
		if (error) {
			callback('Unable to connect to location services!', undefined);
		} else if (body.features.length === 0) {
			callback('Unable to connect to location. Try another search!', undefined);
		} else {
			callback(undefined, {
				latitude: body.features[0].center[1],
				longitude: body.features[0].center[0],
				location: body.features[0].place_name,
			});
		}
	});
};

module.exports = geocode;
