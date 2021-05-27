import React from 'react';

const Pokemon = ({ pokemon }) => {
    return (
        <div>
            {pokemon.map(pkm => 
              <div>
                <a href={pkm.url}>Find out more about {pkm.name}</a>
              </div>
            )}
        </div>
    )
}

export default Pokemon
