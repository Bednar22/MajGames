import '../styles/navbar.scss';

export const Navbar = (props) => {
    return (
        <>
            <div className='nav-container'>
                <p className='nav-logo neonText'>MajGamesLogo</p>

                <p className='nav-link'>Games</p>
                <p className='nav-link'>Scoreboard</p>
            </div>
        </>
    );
};
