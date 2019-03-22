const geocode = require('./utils/geocode.js');
const forecast = require('./utils/forecast.js')

const location = process.argv[2];

if (!location) {
  return console.log("Please provide a location.");
} else {
  geocode(location, (error, { latitude, longitude, location }) => {

    if (error) {
      return console.error(error);
    }

    forecast(latitude, longitude, (error, forecastData) => {

      if (error) {
        return console.error(error)
      }

      console.log(location)
      console.log(forecastData)
    })
  })
}
