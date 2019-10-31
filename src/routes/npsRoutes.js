const express = require('express');
const npsController = require('../controllers/npsController');

const Router = express.Router();

Router.get('/sincronization', npsController.getSurveys);

module.exports = Router;
