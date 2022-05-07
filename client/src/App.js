import './App.scss';
import { Routes, Route, useLocation } from 'react-router-dom';
import { MainPage } from './components/mainPage';
import { Navbar } from './components/navbar';
import { GamesCategories } from './components/categories/gamesCategories';
import { MainWordle } from './components/games/wordle/mainWordle';

function App() {
    return (
        <div className='App'>
            <Navbar></Navbar>
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/games' element={<GamesCategories />} />
                {/* GAMES ROUTES */}
                <Route path='/games/wordle' element={<MainWordle />}></Route>
            </Routes>
        </div>
    );
}

export default App;
