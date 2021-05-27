import React, { useState, useEffect } from 'react';
import { css } from '@emotion/css';
import Pokemon from './components/Pokemon';
import Search from './components/Search';
import useDebounce from './utils/debounceHook';


const App = () => {
  const [pokemon, setPokemon] = useState({});
  const [inputPokemon, setInputPokemon] = useState('');
  const [searching, setSearching] = useState(false);

  const getPokemon = async () => {
    const url = `https://pokeapi.co/api/v2/pokemon/${inputPokemon}`;

    await fetch(url)
    .then ((response) => response.json())
    .then ((data) => {
      if (data.name) {
        setSearching(false);
        console.log(data);
        setPokemon(data);
      }
    }).catch((error) => {
      setSearching(false);
      console.log(error);
      setPokemon({});
    })
  };

  const debouncedSearchPokemon = useDebounce(inputPokemon, 500);

  useEffect(() => {
    if (debouncedSearchPokemon){
      setSearching(true);
      getPokemon();
    } else {
      setSearching(false);
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
      {searching && <p>Searching...</p>}
      <Pokemon
        pokemon={pokemon}
      />
    </div>
  );
}

export default App;
