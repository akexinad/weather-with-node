const request = require('request');
const chalk = require('chalk');

const forecast = (latitude, longitude, callback) => {
  const url = `https://api.darksky.net/forecast/8f309f032cb56d3ea822766f089e0e51/${ latitude },${ longitude }?units=si&lang=it`;

  request({
    url: url,
    json: true,
  }, (error, response) => {
    if (error) {
      callback('Unable to connect to Weather Service!', undefined);
    } else if (response.body.error) {
      callback(response.body.error, undefined)
    } else {
      const [ current, daily ] = [ response.body.currently, response.body.daily.data[0] ];

      callback(undefined, chalk.blue(`${ daily.summary } \n\nIn questo momento la temperatura e ${ current.temperature } gradi con una probabilita di ${ current.precipProbability } percento di pioggia.`))
    }
  })

}


module.exports = forecast;
