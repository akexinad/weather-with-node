const request = require('request');
const chalk = require('chalk');

const geocode = require('./utils/geocode.js');

// 42.5995, 11.2918

// const DarkSkyURL = 'https://api.darksky.net/forecast/8f309f032cb56d3ea822766f089e0e51/37.8267,-122.4233?units=si&lang=it';
//
// request({
//   url: DarkSkyURL,
//   json: true
// }, (error, response) => {
//
//   if (error) {
//     console.log('Unable to connect to Weather Service!');
//   } else if (response.body.error) {
//     console.log('Unable to find location');
//   } else {
//     const [ current, daily ] = [ response.body.currently, response.body.daily.data[0] ];
//
//     console.log(chalk.blue(`Oggi ci possiamo aspettare ${ daily.summary } In questo momento la temperatura e ${ current.temperature } con una probabilita di ${ current.precipProbability } percento di pioggia.`));
//   }
// })

// Geocoding

// const MapBoxURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/Magliano%20in%20Toscana.json?access_token=pk.eyJ1IjoiYWtleGluYWQiLCJhIjoiY2p0aWJ1b3d1MG53dzQzcGY1eGsyZmhlYSJ9.5M9Nprzz59r7--kUgE_BWA&limit=1"
//
// request({
//   url: MapBoxURL,
//   json: true
// }, (error, response) => {
//
//   if (error) {
//     console.log('Unable to connect to location services!');
//   } else if (response.body.features.length === 0) {
//     console.log(`Cannot locate ${ response.body.query }. Try another search.`);
//   } else {
//     const [ latitude, longitude ] = [ response.body.features[0].center[1], response.body.features[0].center[0] ];
//
//     console.log(latitude, longitude);
//   }
// })



geocode('Florence', (error, data) => {
  console.log('Error:', error);
  console.log('Data:', data);
})
