import '../../../styles/tictactoe.scss';
import { useState, useEffect } from 'react';
import { SingleSquare } from './singleSquare';

export const TictactoeMain = (props) => {
    const [board, setBoard] = useState([]);
    const [end, setEnd] = useState(false);
    const [turn, setTurn] = useState(true);

    const createBoard = (size) => {
        let boardlogic = new Array(size).fill(new Array(size));
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                boardlogic[i][j] = ' ';
            }
        }
        setBoard(boardlogic);
    };

    const setChar = (index) => {
        if (end === false) {
            let helpBoard = [...board[index[0]]];
            let helpBoard2 = [...board];

            if (helpBoard[index[1]] === ' ') {
                if (turn === true) {
                    helpBoard[index[1]] = 'O';
                    setTurn(false);
                } else {
                    helpBoard[index[1]] = 'X';
                    setTurn(true);
                }
            } else {
                return;
            }
            helpBoard2[index[0]] = helpBoard;
            setBoard(helpBoard2);
        }
    };

    useEffect(() => {
        createBoard(3);
    }, []);

    return (
        <>
            <h1>Main file ---- logic of the game</h1>{' '}
            {board.map((item, index) => {
                return (
                    <div className='buttons-row' key={index}>
                        {item.map((item2, index2) => {
                            return (
                                <SingleSquare
                                    setChar={setChar}
                                    charIn={item2}
                                    squareInd={[index, index2]}
                                    key={index2}
                                ></SingleSquare>
                            );
                        })}
                    </div>
                );
            })}
        </>
    );
};
