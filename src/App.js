import React, { useState, useEffect } from 'react';
import { css } from '@emotion/css';
import Pokemon from './components/Pokemon';
import Search from './components/Search';
import useDebounce from './utils/debounceHook';


const App = () => {
  const [pokemon, setPokemon] = useState({});
  const [inputPokemon, setInputPokemon] = useState('');

  const getPokemon = async () => {
    const url = `https://pokeapi.co/api/v2/pokemon/${inputPokemon}`;

    await fetch(url)
    .then ((response) => response.json())
    .then ((data) => {
      if (data.name) {
        console.log(data);
        setPokemon(data);
      }
    })
  };

  const debouncedSearchPokemon = useDebounce(inputPokemon, 500);

  useEffect(() => {
    if (debouncedSearchPokemon){
      getPokemon();
    } else {
      setPokemon({});
    }
  }, [debouncedSearchPokemon]);

  return (
    <div className={css`
        margin: auto;
        width: 50%;
        text-align: center;
    `}>
      <h1>Pokedex</h1>
      <Search 
        inputPokemon={inputPokemon} 
        setInputPokemon={setInputPokemon} 
      />
      <Pokemon
        pokemon={pokemon} 
      />
    </div>
  );
}

export default App;
