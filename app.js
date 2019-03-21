const request = require('request');

// 42.599501, 11.291800

const url = 'https://api.darksky.net/forecast/8f309f032cb56d3ea822766f089e0e51/37.8267,-122.4233';

request({
  url: url,
  json: true
}, (error, response) => {
  console.log(response.body.currently);
})
