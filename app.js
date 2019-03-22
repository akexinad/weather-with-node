const geocode = require('./utils/geocode.js');
const forecast = require('./utils/forecast.js')

const location = process.argv[2];

if (!location) {
  return console.log("Please provide a location.");
} else {
  geocode(location, (error, geocodeData) => {

    if (error) {
      return console.error(error);
    }

    forecast(geocodeData.latitude, geocodeData.longitude, (error, forecastData) => {

      if (error) {
        return console.error(error)
      }

      console.log(geocodeData.location)
      console.log(forecastData)
    })
  })
}
