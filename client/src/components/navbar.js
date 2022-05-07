import '../styles/navbar.scss';
import Logo from '../assets/majgames_logo1.svg';
export const Navbar = (props) => {
    return (
        <>
            <div className='nav-container'>
                <img src={Logo} className='nav-logo '></img>

                <p className='nav-link'>Games</p>
                <p className='nav-link'>Scoreboard</p>
            </div>
        </>
    );
};
