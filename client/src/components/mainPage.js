import '../styles/mainPage.scss';
import MainImage from './../assets/myimage.svg';
import LeftBorder from './../assets/left_border.svg';
import { Link } from 'react-router-dom';
export const MainPage = (props) => {
    return (
        <>
            <div className='mainPage-container'>
                {/* <div className='mainPage-image'> */}
                <div className='mainPage-text'>
                    <h1>
                        Check out some of my{' '}
                        <Link className='games-word' to='games'>
                            games
                        </Link>
                        !
                    </h1>
                    <h3>Try them and make it to the scoreboard!</h3>
                </div>
                <img src={MainImage} className='mainPage-image'></img>
                {/* </div> */}
            </div>
            <img className='left-border' src={LeftBorder}></img>
        </>
    );
};
