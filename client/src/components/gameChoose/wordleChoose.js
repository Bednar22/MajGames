import '../../styles/wordleCat.scss';
import { useNavigate } from 'react-router';
export const WordleCat = (props) => {
    const navigate = useNavigate();
    return (
        <>
            <div className='bouncing-text' onClick={() => navigate('wordle')}>
                <div className='bor'>
                    <div className='w'>W</div>
                </div>
                <div className='bor'>
                    <div className='o'>O</div>
                </div>
                <div className='bor'>
                    <div className='r'>R</div>
                </div>
                <div className='bor'>
                    <div className='d'>D</div>
                </div>
                <div className='bor'>
                    <div className='l'>L</div>
                </div>
                <div className='bor'>
                    <div className='e'>E</div>
                </div>
                {/* <div className='shadow'></div> */}
                {/* <div className='shadow-two'></div> */}
            </div>{' '}
        </>
    );
};
