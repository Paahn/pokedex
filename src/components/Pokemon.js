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
            {pokemon.map(pkm => 
              <div>
                <a href={pkm.url}>Find out more about {pkm.name}</a>
              </div>
            )}
        </div>
    )
}

export default Pokemon;
