
const GET_CODE_URL = 'https://api.thebase.in/1/oauth/authorize?response_type=code&client_id=e1e9af363e42be834d241b86ea080f10&redirect_uri=https://akaoni.official.ec/&scope=read_items&state=hoge';
const CLIENT_ID = 'e1e9af363e42be834d241b86ea080f10';
const CLIENT_SECRET = '760e098d7af424ed135b869f603a6dfc';
const REDIRECT_URL = 'https://akaoni.official.ec/';
const GET_ITEMS = 'https://api.thebase.in/1/items/';
const TOKEN = 'fec4007f47eb2731f1953f9c592b7ee0';
var ACCESS_TOKEN = '';
var REFRESH_TOKEN = '';

const fetch = require('node-fetch');

// const getCode = () => {
//   fetch(GET_CODE_URL, {
//     method: 'GET',
//     header: 'location: '
//   })
// 　.then(res => res.text())
//   .then((result) => {
//     console.log('====================================');
//     console.log(result);
//   },
//   (error) => {
//     console.log('error');
//     console.log(error);
//   })
// }

const getAccessToken = () => {
  fetch(`https://api.thebase.in/1/oauth/token?grant_type=authorization_code&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&code=${TOKEN}&redirect_uri=${REDIRECT_URL}`, {
    method: 'POST',
    header: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'origin' : '*'
    }
  })
  .then(res => res.json())
  .then((result) => {
    console.log('result');
    console.log(result);
    ACCESS_TOKEN = result.access_token;
    REFRESH_TOKEN = result.refresh_token;
    getItems();
  },
  (error) => {
    console.log('error');
    console.log(error);
  })
}

const getItems = () => {
  console.log(ACCESS_TOKEN);
  
  fetch(GET_ITEMS, {
    method: 'GET',
    header: {
      'Authorization': `Bearer ${ACCESS_TOKEN}`,
    }
  })
  .then(res => res.text())
  .then((result) => {
    console.log('result');
    console.log(result);
  },
  (error) => {
    console.log('error');
    console.log(error);
  })
}

module.exports.init = function() {
  console.log('calling API');
  getAccessToken();
}