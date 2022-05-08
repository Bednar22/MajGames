import { WordleCat } from './wordleCat';
import '../../styles/categories.scss';

export const GamesCategories = (props) => {
    return (
        <>
            <div className='categories-container'>
                <WordleCat></WordleCat>
            </div>
        </>
    );
};
