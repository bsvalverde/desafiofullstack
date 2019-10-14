const express = require('express');

const QuestionsController = require('./controllers/QuestionsController');

const routes = express.Router();

routes.get('/', QuestionsController.index);

module.exports = routes;
