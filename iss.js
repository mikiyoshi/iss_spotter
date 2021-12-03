const { callbackify } = require('util');

const fetchMyIP = function (callback) {
  const request = require('request');

  const domain = 'https://api64.ipify.org?format=json';

  request(domain, (error, response, body) => {
    if (error) {
      // console.log('Request Failed');
      callback(error, null);
      return;
    }
    // console.log(data.ip);
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }

    const ip = JSON.parse(body).ip;
    callback(null, ip);
  });
};

module.exports = {
  fetchMyIP,
};
