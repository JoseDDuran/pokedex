const _ = require('lodash');
const { handleError } = require('../utils/helpers/expressHelper');
const data = require('../utils/constants/pokemon');

const { pokemon, info } = data;
function getPokemon(req, res) {
  try {
    return res.json(pokemon);
  } catch (error) {
    const errorMessage = handleError(error);
    return res.status(500).json(errorMessage);
  }
}

function getDetailPokemon(req, res) {
  const { id } = req.params;
  try {
    const onepoke = info.filter(poke => poke.id === parseInt(id, 10));
    const id_evolution = pokemon.filter(poke => poke.id === parseInt(id, 10))[0].evolution;
    const evolutions1 = pokemon.filter(poke => poke.evolution === parseInt(id_evolution, 10));
    const evolutions = evolutions1.map(e => ({
      id: e.id,
      name: e.name,
      type: e.type,
      photo: e.photo,
    }));
    onepoke[0].evolutions = evolutions;
    const onePoke = onepoke[0];
    return res.json(onePoke);
  } catch (error) {
    const errorMessage = handleError(error);
    return res.status(500).json(errorMessage);
  }
}
module.exports = {
  getPokemon,
  getDetailPokemon,
};
