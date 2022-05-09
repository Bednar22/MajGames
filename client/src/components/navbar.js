import '../styles/navbar.scss';
import { NavLink, Link } from 'react-router-dom';
import Logo from '../assets/majgames_logo1.svg';
export const Navbar = (props) => {
    return (
        <>
            <div className='nav-container'>
                <div className='nav-left'>
                    <img src={Logo} className='nav-logo '></img>
                    <Link className='neonText' to='/'>
                        MajGames
                    </Link>
                </div>
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
