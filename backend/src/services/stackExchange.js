const axios = require('axios');

const stackExchange = axios.create({
  baseURL: 'https://api.stackexchange.com/2.2'
});

module.exports = stackExchange;
