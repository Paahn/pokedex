import React from 'react';
import { css } from '@emotion/css';

const Pokemon = ({ pokemon }) => {
  
    return (
        <div className={css`
            margin: auto;
            width: 50%;
            display: flex;
            flex-direction: column;
            align-items: center;
        `}
        >
            <div>
              {
               pokemon.sprites && 
               <div> 
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
        </div>
    )
}

export default Pokemon;
