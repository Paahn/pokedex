import React, { useState, useEffect } from 'react';
import { css } from '@emotion/css';
import Pokemon from './components/Pokemon';
import Search from './components/Search';


const App = () => {
  const [pokemon, setPokemon] = useState({});
  const [inputPokemon, setInputPokemon] = useState('');

  const getPokemon = async (inputPokemon) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${inputPokemon}`;

    await fetch(url)
    .then ((response) => response.json())
    .then ((data) => {
      console.log(data);
      setPokemon(data);
    })
  };

  useEffect(() => {
    getPokemon(inputPokemon);
  }, [inputPokemon]);

  return (
    <div className={css`
        margin: auto;
        width: 50%;
        text-align: center;
    `}>
      <h1>Pokedex</h1>
      <Search inputPokemon={inputPokemon} setInputPokemon={setInputPokemon} />
      <Pokemon pokemon={pokemon} />
    </div>
  );
}

export default App;
