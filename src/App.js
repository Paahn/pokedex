import React, { useState, useEffect } from 'react';
import { css } from '@emotion/css';
import Pokemon from './components/Pokemon';
import Search from './components/Search';
import useDebounce from './utils/debounceHook';
import Safari from './components/Safari';


const App = () => {
  const [pokemon, setPokemon] = useState({});
  const [inputPokemon, setInputPokemon] = useState('');
  const [searching, setSearching] = useState(false);
  const [searchErrors, setSearchErrors] = useState(false);
  const [wildPokemon, setWildPokemon] = useState([]);

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

  const debouncedSearchPokemon = useDebounce(inputPokemon, 1500);

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

  const findWildPokemon = () => {
    let wildIDs = [];
    const min = 1;
    const max = 151;
    for (let i = 0; i <= 4; i++){
      wildIDs.push(Math.floor(min + Math.random() * (max - min)));
    }
    setWildPokemon(wildIDs);
    console.log(`hey, this is that array of random IDs you wanted ${wildIDs}`);
  }

  useEffect(() => {
    findWildPokemon();
  }, [])

  return (
    <div className={css`
        margin: auto;
        width: 60%;
        text-align: center;
        background-color: #ff4d4d;
        padding: 50px;
        border-radius: 10px;
        height: 100vh;
        font-family: "pokemon-font", monospace;
    `}>
      <h1 className={css`
        font-size: 40px;
      `}>
      Pokédex
      </h1>
      <Search 
        inputPokemon={inputPokemon} 
        setInputPokemon={setInputPokemon} 
      />
      {inputPokemon !== '' 
      ? <Pokemon
          pokemon={pokemon}
        />
      : <Safari wildPokemon={wildPokemon} />}
      {searching && <p>Searching...</p>}
      {searchErrors ? <p>Not found!</p> : null}
    </div>
  );
}

export default App;
