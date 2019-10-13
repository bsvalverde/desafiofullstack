const express = require('express');

const routes = express.Router();

routes.get('/', function() { console.log('working'); })

module.exports = routes;
