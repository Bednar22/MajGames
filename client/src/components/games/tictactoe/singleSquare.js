import React, { useState, useEffect } from 'react';
import '../../../styles/tictactoe.scss';

export const SingleSquare = ({ setChar, charIn, squareInd }) => {
    const singleSquareClick = () => {
        setChar(squareInd);
    };

    return (
        <>
            <div className='tic-square' onClick={() => singleSquareClick()}>
                {charIn}
            </div>
        </>
    );
};
