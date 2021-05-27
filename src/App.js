import React, { useState, useEffect } from 'react';
import { css } from '@emotion/css';
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

  const getPokemon = async () => {
    const url = "https://pokeapi.co/api/v2/pokemon/bulbasaur";

    await fetch(url)
    .then ((response) => response.json())
    .then ((data) => {
      console.log(data);
    })
  };

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <div className={css`
        margin: auto;
        width: 50%;
        text-align: center;
    `}>
      <h1>Pokedexter</h1>
      <Pokemon pokemon={pokemon} />
    </div>
  );
}

export default App;
