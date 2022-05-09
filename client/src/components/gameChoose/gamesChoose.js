import { WordleCat } from './wordleChoose';
import { TicTacToeChoose } from './tictactoeChoose';
import '../../styles/categories.scss';

export const GamesCategories = (props) => {
    return (
        <>
            <div className='categories-container'>
                <WordleCat></WordleCat>
                <TicTacToeChoose></TicTacToeChoose>
            </div>
        </>
    );
};
