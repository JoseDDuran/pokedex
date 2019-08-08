const express = require('express');
const pokemonController = require('../controllers/pokemonController');

const Router = express.Router();

Router.get('/', pokemonController.getPokemon);
Router.get('/:id', pokemonController.getDetailPokemon);

module.exports = Router;
