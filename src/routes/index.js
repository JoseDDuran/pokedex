const express = require('express');
const pokemonRoutes = require('./pokemonRoutes');
const npsRoutes = require('./npsRoutes');

const Router = express.Router();

// Aqui puede configurar el Router
Router.use('/pokemon', pokemonRoutes);
Router.use('/nps', npsRoutes);

module.exports = Router;
