import React from 'react';
import { css } from '@emotion/css';
import safari from '../safari.png';

const Safari = ( {wildPokemon }) => {
    return (
        <div className={css`
            background-image: url(${safari});
            width: 100%;
            height: 50vh; 
            border-radius: 5px;
            margin-top: 10px; 
            display: flex;
            justify-content: space-between;  
        `}>
            {wildPokemon.map((poke) => 
                <div className={css`
                    align-self: ${poke % 2 === 0 ? 'flex-end' : 'center'};
                `}>
                  <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke}.png`}
                    ></img>  
                </div>
                
            )}
        </div>
    )
}

export default Safari;
