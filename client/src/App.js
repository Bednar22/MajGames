import './App.scss';
import { Routes, Route, useLocation } from 'react-router-dom';
import { MainPage } from './components/mainPage';
import { Navbar } from './components/navbar';
import { GamesCategories } from './components/gameChoose/gamesChoose';
import { MainWordle } from './components/games/wordle/mainWordle';
import { TictactoeMain } from './components/games/tictactoe/tictactoeMain';

function App() {
    return (
        <div className='App'>
            <Navbar></Navbar>
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/games' element={<GamesCategories />} />
                {/* GAMES ROUTES */}
                <Route path='/games/wordle' element={<MainWordle />}></Route>
                <Route path='/games/tictactoe' element={<TictactoeMain />}></Route>
            </Routes>
        </div>
    );
}

export default App;
