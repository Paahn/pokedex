import React from 'react'

const Search = ({ inputPokemon, setInputPokemon }) => {
    const searchPokemon = (event) => {
        setInputPokemon(event.target.value);
    }
    return (
        <div>
            <input
             value={inputPokemon}
             onChange={searchPokemon}
             placeholder="Search Pokémon"
            ></input>
        </div>
    )
}

export default Search
