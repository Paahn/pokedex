import React from 'react';
import { css } from '@emotion/css';
import safari from '../safari.png';

const Safari = () => {
    return (
        <div className={css`
            background-image: url(${safari});
            width: 100%;
            height: 50vh; 
            border-radius: 5px;
            margin-top: 10px;   
        `}>
        </div>
    )
}

export default Safari
