const https = require('https'); // This is a core module. No need to install it.
const url = `https://api.darksky.net/forecast/8f309f032cb56d3ea822766f089e0e51/40,-75?units=si&lang=it`;

const request = https.request(url, (response) => {
  let data = '';

  response.on('data', (chunk) => {
    data = data + chunk.toString();
  })

  response.on('end', () => {
    const body = JSON.parse(data);
    console.log(body);
  })

})

request.on('error', (error) => {
  console.log('There was error.', error);
})

request.end();
