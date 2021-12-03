// index.js
const { fetchMyIP } = require('./iss');

// console.log(error);
// console.log(ip);
fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }

  console.log('It worked! Returned IP:', ip);
});
