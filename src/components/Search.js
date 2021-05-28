import React, { useEffect } from 'react';
import '../components/search.css';
import autocomplete from '../utils/autocomplete';
const pokemon = require('pokemon');

const Search = ({ inputPokemon, setInputPokemon }) => {
    const searchPokemon = (event) => {
        setInputPokemon(event.target.value);
    }
    const pokemonList = pokemon.all();
    useEffect(() => {
        autocomplete(document.getElementById('myInput'), pokemonList, setInputPokemon);
    }, [inputPokemon])
  
    return (
        <div>
            <form autocomplete='off'>
                <div className='autocomplete'>
                    <input
                     id='myInput'
                     type='text'
                     name='myPokemon'
                     value={inputPokemon}
                     onChange={searchPokemon}
                     placeholder='Search Pokémon'
                    ></input>
                </div>
            </form>

        </div>
    )
}

export default Search;
