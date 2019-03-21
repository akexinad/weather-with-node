const request = require('request');

// 42.5995, 11.2918

const url = 'https://api.darksky.net/forecast/8f309f032cb56d3ea822766f089e0e51/37.8267,-122.4233?units=si&lang=it';

request({
  url: url,
  json: true
}, (error, response) => {
  const current = response.body.currently;
  const daily = response.body.daily.data[0];
  // console.log(current);
  console.log(daily);

  console.log(`It is currently ${ current.temperature } degrees and there is ${ current.precipProbability }% chance of rain.`);

  console.log(`Oggi ci possiamo aspettare ${ daily.summary } In questo momento la temperatura e ${ current.temperature } con una probabilita di ${ current.precipProbability } percento di pioggia.`);
})
