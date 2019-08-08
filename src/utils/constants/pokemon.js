const pokemon = [
  {
    id: 1,
    name: 'Bulbasaur',
    type: 'grass',
    photo: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    evolution: 1,
  },
  {
    id: 2,
    name: 'Ivysaur',
    type: 'grass',
    photo: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
    evolution: 1,
  },
  {
    id: 3,
    name: 'Venusaur',
    type: 'grass',
    photo: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
    evolution: 1,
  },
  {
    id: 4,
    name: 'Charmander',
    type: 'fire',
    photo: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
    evolution: 2,
  },
  {
    id: 5,
    name: 'Charmeleon',
    type: 'fire',
    photo: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png',
    evolution: 2,
  },
  {
    id: 6,
    name: 'Charizard',
    type: 'fire',
    photo: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
    evolution: 2,
  },
  {
    id: 7,
    name: 'Squirtle',
    type: 'water',
    photo: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
    evolution: 3,
  },
  {
    id: 8,
    name: 'Wartortle',
    type: 'water',
    photo: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png',
    evolution: 3,
  },
  {
    id: 9,
    name: 'Blastoise',
    type: 'water',
    photo: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png',
    evolution: 3,
  },
];

const info = [
  {
    id: 1,
    name: 'Bulbasaur',
    type: 'grass',
    photo: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    about: 'Bulbasaur is a small, quadruped Pokémon that has blue-green skin with darker patches. It has red eyes with white pupils, pointed, ear-like structures on top of its head, and a short, blunt snout with a wide mouth. A pair of small, pointed teeth are visible in the upper jaw when its mouth is open. Each of its thick legs ends with three sharp claws. On its back is a green plant bulb, which is grown from a seed planted there at birth. The bulb provides it with energy through photosynthesis as well as from the nutrient-rich seeds contained within.',
    height: 7,
    weight: 69,
    stats: [
      {
        name: 'Speed',
        base: 45,
      },
      {
        name: 'Sp. Def',
        base: 65,
      },
      {
        name: 'Sp. Attack',
        base: 65,
      },
      {
        name: 'Defense',
        base: 49,
      },
      {
        name: 'Attack',
        base: 49,
      },
      {
        name: 'Hp',
        base: 45,
      },
    ],
  },
  {
    id: 2,
    name: 'Ivysaur',
    type: 'grass',
    photo: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
    about: 'Ivysaur is a quadruped Pokémon that has blue-green skin with darker patches. On top of its head are pointed ears with black insides and it has narrow red eyes. It has a short, rounded snout with a wide mouth and two pointed teeth in its upper jaw. Each of its feet has three claws on them. The bulb on its back has bloomed into a large pink bud. ',
    height: 10,
    weight: 130,
    stats: [
      {
        name: 'Speed',
        base: 60,
      },
      {
        name: 'Sp. Def',
        base: 80,
      },
      {
        name: 'Sp. Attack',
        base: 80,
      },
      {
        name: 'Defense',
        base: 63,
      },
      {
        name: 'Attack',
        base: 62,
      },
      {
        name: 'Hp',
        base: 60,
      },
    ],
  },
  {
    id: 3,
    name: 'Venusaur',
    type: 'grass',
    photo: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
    about: 'Venusaur is a squat, quadruped Pokémon with bumpy, blue-green skin. It has small, circular red eyes, a short, blunt snout, and a wide mouth with two pointed teeth in the upper jaw and four in the lower jaw. On top of its head are small, pointed ears with reddish pink insides. It has three clawed toes on each foot. The bud on its back has bloomed in a large pink, white-spotted flower. The flower is supported by a thick, brown trunk surrounded by green fronds. A female Venusaur will have a seed in the center of its flower',
    height: 20,
    weight: 1000,
    stats: [
      {
        name: 'Speed',
        base: 80,
      },
      {
        name: 'Sp. Def',
        base: 100,
      },
      {
        name: 'Sp. Attack',
        base: 100,
      },
      {
        name: 'Defense',
        base: 83,
      },
      {
        name: 'Attack',
        base: 82,
      },
      {
        name: 'Hp',
        base: 80,
      },
    ],
  },
  {
    id: 4,
    name: 'Charmander',
    type: 'fire',
    photo: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
    about: 'Charmander is a bipedal, reptilian Pokémon with a primarily orange body and blue eyes. Its underside from the chest down and the soles of its feet are cream-colored. It has two small fangs visible in its upper jaw and two smaller fangs in its lower jaw. A fire burns at the tip of this Pokémons slender tail and has blazed there since Charmanders birth.',
    height: 6,
    weight: 85,
    stats: [
      {
        name: 'Speed',
        base: 65,
      },
      {
        name: 'Sp. Def',
        base: 50,
      },
      {
        name: 'Sp. Attack',
        base: 60,
      },
      {
        name: 'Defense',
        base: 43,
      },
      {
        name: 'Attack',
        base: 52,
      },
      {
        name: 'Hp',
        base: 39,
      },
    ],
  },
  {
    id: 5,
    name: 'Charmeleon',
    type: 'fire',
    photo: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png',
    about: 'Charmeleon is a bipedal, reptilian Pokémon. It has dark red scales and a cream underside from the chest down. It has narrow, blue eyes and a long snout with a slightly hooked tip. On the back of its head is a single horn-like protrusion.',
    height: 11,
    weight: 190,
    stats: [
      {
        name: 'Speed',
        base: 80,
      },
      {
        name: 'Sp. Def',
        base: 65,
      },
      {
        name: 'Sp. Attack',
        base: 80,
      },
      {
        name: 'Defense',
        base: 58,
      },
      {
        name: 'Attack',
        base: 64,
      },
      {
        name: 'Hp',
        base: 58,
      },
    ],
  },
  {
    id: 6,
    name: 'Charizard',
    type: 'fire',
    photo: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
    about: 'Charizard is a draconic, bipedal Pokémon. It is primarily orange with a cream underside from the chest to the tip of its tail. It has a long neck, small blue eyes, slightly raised nostrils, and two horn-like structures protruding from the back of its rectangular head. There are two fangs visible in the upper jaw when its mouth is closed.',
    height: 17,
    weight: 905,
    stats: [
      {
        name: 'Speed',
        base: 100,
      },
      {
        name: 'Sp. Def',
        base: 85,
      },
      {
        name: 'Sp. Attack',
        base: 109,
      },
      {
        name: 'Defense',
        base: 78,
      },
      {
        name: 'Attack',
        base: 84,
      },
      {
        name: 'Hp',
        base: 78,
      },
    ],
  },
  {
    id: 7,
    name: 'Squirtle',
    type: 'water',
    photo: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
    about: 'Squirtle is a small Pokémon that resembles a light blue turtle. While it typically walks on its two short legs, it has been shown to run on all fours in Super Smash Bros. Brawl. It has large, purplish or reddish eyes and a slightly hooked upper lip. Each of its hands and feet have three pointed digits.',
    height: 5,
    weight: 90,
    stats: [
      {
        name: 'Speed',
        base: 43,
      },
      {
        name: 'Sp. Def',
        base: 64,
      },
      {
        name: 'Sp. Attack',
        base: 50,
      },
      {
        name: 'Defense',
        base: 65,
      },
      {
        name: 'Attack',
        base: 48,
      },
      {
        name: 'Hp',
        base: 44,
      },
    ],
  },
  {
    id: 8,
    name: 'Wartortle',
    type: 'water',
    photo: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png',
    about: 'Wartortle is a bipedal, indigo Pokémon similar to a turtle. It has brown eyes, a dark blue streak on each cheek, and two sharp teeth protruding from its upper jaw. It has three clawed fingers and pointed toes. On each side of its head are feather-like ears covered in pale blue fur. A brown shell with a pale yellow underside encases its body.',
    height: 10,
    weight: 225,
    stats: [
      {
        name: 'Speed',
        base: 58,
      },
      {
        name: 'Sp. Def',
        base: 80,
      },
      {
        name: 'Sp. Attack',
        base: 65,
      },
      {
        name: 'Defense',
        base: 80,
      },
      {
        name: 'Attack',
        base: 63,
      },
      {
        name: 'Hp',
        base: 59,
      },
    ],
  },
  {
    id: 9,
    name: 'Blastoise',
    type: 'water',
    photo: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png',
    about: 'Blastoise is a large, bipedal turtle-like Pokémon. Its body is blue and is mostly hidden by its tough, brown shell. This shell has a cream-colored underside and a white ridge encircling its arms and separating the upper and lower halves. Two powerful water cannons reside in the top of shell over its shoulders.',
    height: 16,
    weight: 855,
    stats: [
      {
        name: 'Speed',
        base: 78,
      },
      {
        name: 'Sp. Def',
        base: 105,
      },
      {
        name: 'Sp. Attack',
        base: 85,
      },
      {
        name: 'Defense',
        base: 100,
      },
      {
        name: 'Attack',
        base: 83,
      },
      {
        name: 'Hp',
        base: 79,
      },
    ],
  },
];

module.exports = {
  pokemon,
  info,
};
