import './App.css';
import React, { useState } from 'react';
import Pokemon from './components/Pokemon';

const App = () => {
  const [pokemon, setPokemon] = useState([
    {
        "name": "bulbasaur",
        "url": "https://pokeapi.co/api/v2/pokemon/1/"
    },
    {
        "name": "ivysaur",
        "url": "https://pokeapi.co/api/v2/pokemon/2/"
    },
    {
        "name": "venusaur",
        "url": "https://pokeapi.co/api/v2/pokemon/3/"
    },
    {
        "name": "charmander",
        "url": "https://pokeapi.co/api/v2/pokemon/4/"
    },
    {
        "name": "charmeleon",
        "url": "https://pokeapi.co/api/v2/pokemon/5/"
    },
    {
        "name": "charizard",
        "url": "https://pokeapi.co/api/v2/pokemon/6/"
    }
  ]);
  return (
    <div className="App">
      <h1>Pokedexter</h1>
      <Pokemon pokemon={pokemon} />
    </div>
  );
}

export default App;