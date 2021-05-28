import React from 'react';
import { css } from '@emotion/css';
import getColour from '../utils/getColour';
import textColour from '../utils/textColour';

const Pokemon = ({ pokemon }) => {
    const pStyle = css`
    background-color:  #f2f2f2;
    font-size: larger;
    border-radius: 5px;
    padding: 3px;
    `;
    const toggleImage = (e) => {
      const altImg = e.target.getAttribute('alt');
      if (altImg === 'default') {
        e.target.setAttribute( 'src', `${pokemon.sprites.front_shiny}`);
        e.target.setAttribute('alt', 'shiny');
      } else {
        e.target.setAttribute( 'src', `${pokemon.sprites.front_default}`);
        e.target.setAttribute('alt', 'default');
      }
    }
    return (
        <div className={css`
            margin: auto;
            width: 100%;
            background-color: #c2d6d6;
            padding: 5px;
            border-radius: 5px;
            height: 54vh;
            margin-top: 10px;
        `}
        >
              {
               pokemon.sprites && 
               <div className={css`
                  background-color: ${getColour(pokemon.types[0])};
                  padding: 20px;
                  margin: 10px;
                  display: flex;
                  justify-content: space-around;
               `}> 
                  <div>
                  <img
                    className={css`
                      cursor: pointer;  
                    `}
                    src={pokemon.sprites.front_default} 
                    alt='default'
                    onClick={toggleImage}>
                    </img>
                    <p className={pStyle}>name: {pokemon.name}</p>
                    {pokemon.types.map((type) => 
                      <p className={pStyle} key={type.type.name}>type: {type.type.name}</p>
                    )}
                  </div>
                  <div>
                    <p className={pStyle}>height: {pokemon.height}</p>
                    <p className={pStyle}>weight: {pokemon.weight}</p>
                    <p className={pStyle}>base xp: {pokemon.base_experience}</p>
                    {pokemon.abilities.map((ab) =>
                    <p className={pStyle} key={ab.ability.name}>ability: {ab.ability.name}</p>
                    )}
                  </div>
                  <div>
                    {pokemon.stats.map((stat) =>
                    <p className={pStyle} 
                      key={stat.stat.name}>
                      {stat.stat.name}: <strong className={css`
                     color: ${textColour(stat.base_stat)};
                   `}>{stat.base_stat}</strong>
                    </p>
                    )}
                  </div>
              </div>
              }
        </div>
    )
}

export default Pokemon;
