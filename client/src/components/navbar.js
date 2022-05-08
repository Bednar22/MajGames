import '../styles/navbar.scss';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/majgames_logo1.svg';
export const Navbar = (props) => {
    return (
        <>
            <div className='nav-container'>
                <img src={Logo} className='nav-logo '></img>

                <NavLink className='nav-button' to='games'>
                    Games
                </NavLink>
                <NavLink className='nav-button' to='scoreboard'>
                    Scoreboard
                </NavLink>
            </div>
        </>
    );
};
