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
              <img src={pokemon.sprites.front_default}></img>
              <p>name: {pokemon.name}</p>
              <p>height: {pokemon.height}</p>
              <p>weight: {pokemon.weight}</p>
              <p>base xp: {pokemon.base_experience}</p>
              {pokemon.abilities.map((ab) =>
              <p>Ability: {ab.ability.name}</p>
              )}
              {pokemon.types.map((type) => 
              <p>Type: {type.type.name}</p>
              )}
              <div>
                {pokemon.stats.map((stat) =>
                <p>{stat.stat.name}: {stat.base_stat}</p>
                )}
              </div>
            </div>
        </div>
    )
}

export default Pokemon;
