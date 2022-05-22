import React, { useState, useEffect } from 'react';
import '../../../styles/tictactoe.scss';

export const SingleSquare = (props) => {
    const singleSquareClick = () => {
        //setTextColor('black');
        props.setChar(props.squareInd);
    };

    return (
        <>
            <div className='tic-square' onClick={() => singleSquareClick()}>
                {props.charIn}
            </div>
        </>
    );
};
