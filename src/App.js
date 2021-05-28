import React, { useState, useEffect } from 'react';
import { css } from '@emotion/css';
import Pokemon from './components/Pokemon';
import Search from './components/Search';
import useDebounce from './utils/debounceHook';


const App = () => {
  const [pokemon, setPokemon] = useState({});
  const [inputPokemon, setInputPokemon] = useState('');
  const [searching, setSearching] = useState(false);
  const [searchErrors, setSearchErrors] = useState(false);

  const getPokemon = async () => {
    const url = `https://pokeapi.co/api/v2/pokemon/${inputPokemon.toLowerCase()}`;

    await fetch(url)
    .then ((response) => response.json())
    .then ((data) => {
      if (data.name) {
        setSearching(false);
        setSearchErrors(false);
        console.log(data);
        setPokemon(data);
      }
    }).catch((error) => {
      setSearching(false);
      setSearchErrors(true);
      console.log(error);
      setPokemon({});
    })
  };

  const debouncedSearchPokemon = useDebounce(inputPokemon, 500);

  useEffect(() => {
    if (debouncedSearchPokemon){
      setSearching(true);
      setSearchErrors(false);
      getPokemon();
    } else {
      setSearching(false);
      setSearchErrors(false);
      setPokemon({});
    }
  }, [debouncedSearchPokemon]);

  return (
    <div className={css`
        margin: auto;
        width: 80%;
        text-align: center;
    `}>
      <h1>Pokedex</h1>
      <Search 
        inputPokemon={inputPokemon} 
        setInputPokemon={setInputPokemon} 
      />
      {inputPokemon !== '' 
      ? null
      : <p>Pokemon search results will appear here</p>}
      {searching && <p>Searching...</p>}
      {searchErrors ? <p>Not found!</p> : null}
      <Pokemon
        pokemon={pokemon}
      />
    </div>
  );
}

export default App;
