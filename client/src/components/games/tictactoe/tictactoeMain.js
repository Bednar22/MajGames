import '../../../styles/tictactoe.scss';
import { useState, useEffect } from 'react';
import { SingleSquare } from './singleSquare';

export const TictactoeMain = (props) => {
    const [board, setBoard] = useState([]);
    const [end, setEnd] = useState(false);
    const [turn, setTurn] = useState(true);
    const [boardSize, setBoardSize] = useState(3);
    const [winner, setWinner] = useState('');

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
        let winChar;
        if (turn) {
            winChar = 'O';
        } else {
            winChar = 'X';
        }

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
            checkWin(helpBoard2, winChar);
        }
    };

    const checkWin = (checkBoard, winChar) => {
        let streak = 0;
        //checking every horizontal line WORKS
        for (let i = 0; i < checkBoard.length; i++) {
            for (let j = 0; j < checkBoard.length; j++) {
                if (checkBoard[i][j] == winChar) {
                    streak++;
                } else {
                    streak = 0;
                }
                if (streak == 3) {
                    setWinner(winChar);
                    setEnd(true);
                }
            }
        }
        //checking every vertical line WORKS
        for (let i = 0; i < checkBoard.length; i++) {
            for (let j = 0; j < checkBoard.length; j++) {
                if (checkBoard[j][i] == winChar) {
                    streak++;
                } else {
                    streak = 0;
                }

                if (streak == 3) {
                    setWinner(winChar);
                    setEnd(true);
                }
            }
        }
        setEnd(false);
    };

    useEffect(() => {
        createBoard(5);
    }, []);

    return (
        <>
            <div className='board-size-panel'>
                <label htmlFor='tictac-input'>Put size of the board</label>
                <input
                    id='tictac-input'
                    name='tictac-input'
                    className='tictac-input'
                    type='number'
                    onChange={(e) => createBoard(e.target.value)}
                ></input>
            </div>
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
