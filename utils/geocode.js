const request = require('request');

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${ encodeURIComponent(address) }.json?access_token=pk.eyJ1IjoiYWtleGluYWQiLCJhIjoiY2p0aWJ1b3d1MG53dzQzcGY1eGsyZmhlYSJ9.5M9Nprzz59r7--kUgE_BWA&limit=1`

  request({
    url: url,
    json: true,
  }, (error, response) => {
    if (error) {
      callback('Unable to connet to location services', undefined)
    } else if (response.body.features.length === 0) {
      callback('Unable to find location. Try another search', undefined)
    } else {
      callback(undefined, {
        latitude: response.body.features[0].center[1],
        longitude: response.body.features[0].center[0],
        locationName: response.body.features[0],
      })
    }
  })
}

module.exports = geocode;