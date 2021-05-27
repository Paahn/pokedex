import React from 'react';
import { css } from '@emotion/css';
import getColour from '../utils/getColour';

const Pokemon = ({ pokemon }) => {
    return (
        <div className={css`
            margin: auto;
            width: 100%;
        `}
        >
              {
               pokemon.sprites && 
               <div className={css`
                  background-color: ${getColour(pokemon.types[0])};
               `}> 
                  <img src={pokemon.sprites.front_default} alt='default-sprite'></img>
                  <p>name: {pokemon.name}</p>
                  <p>height: {pokemon.height}</p>
                  <p>weight: {pokemon.weight}</p>
                  <p>base xp: {pokemon.base_experience}</p>
                  {pokemon.abilities.map((ab) =>
                  <p key={ab.ability.name}>Ability: {ab.ability.name}</p>
                  )}
                  {pokemon.types.map((type) => 
                  <p key={type.type.name}>Type: {type.type.name}</p>
                  )}
                  <div>
                    {pokemon.stats.map((stat) =>
                    <p key={stat.stat.name}>{stat.stat.name}: {stat.base_stat}</p>
                    )}
                  </div>
              </div>
              }
        </div>
    )
}

export default Pokemon;
