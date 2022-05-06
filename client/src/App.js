import './App.scss';
import { MainPage } from './components/mainPage';
import { Navbar } from './components/navbar';

function App() {
    return (
        <div className='App'>
            <Navbar></Navbar>
            <MainPage></MainPage>
        </div>
    );
}

export default App;
