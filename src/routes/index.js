const express = require('express');
const pokemonRoutes = require('./pokemonRoutes');

const Router = express.Router();

// Aqui puede configurar el Router
Router.use('/pokemon', pokemonRoutes);

module.exports = Router;
