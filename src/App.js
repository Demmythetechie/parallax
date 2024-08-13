import Home from './Home';
import { createContext } from 'react';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

const scroll = createContext();

function App() {
  const [scrl1, setscrl1] = useState('');
  const [scrl2, setscrl2] = useState('');
  const [scrl3, setscrl3] = useState('');


  const nxt = () => {
    setscrl1('down');
    setscrl2('imgdown');
    setscrl3('positiondwn');
  };

  const prv = () => {
    if (scrl1 !== '') {
      setscrl1('up');
      setscrl2('imgup');
      setscrl3('positionup');
    }
  };

  const handleWheel = (event) => {
    if (event.deltaY > 0) {
      setscrl1('down');
      setscrl2('imgdown');
      setscrl3('positiondwn');
    } else {
      if (scrl1 !== '') {
        setscrl1('up');
        setscrl2('imgup');
        setscrl3('positionup');
      }
    }
  };

  return (
    <div className="relative w-[100%] h-[100vh] overflow-hidden flex flex-col justify-between" onWheel={handleWheel}>
      <div className='absolute w-[1.5%] h-[100vh] z-20 left-[98.5%] flex flex-col justify-between items-center'>
        <div className="w-[100%] aspect-[1/1]" onClick={prv}>
          <svg viewBox="0 0 40 40" className="flex justify-center items-center opacity-70 hover:opacity-100 group">
            <g>
              <rect width="40" height="40" stroke="#007BFF" fill="none" strokeWidth="3"/>
              <polyline points="12,22 20,12 28,22" stroke="#007BFF" strokeWidth="3" fill="none" strokeLinecap="round" strokeDasharray="6 4"/>
            </g>
          </svg>
        </div>
        <div className="absolute w-[100%] h-[94.4vh] top-[2.9%]">
          <div className="relative w-[100%] h-[100%]">
            <div className={`${scrl3} absolute w-[100%] h-[50%] bg-[#007BFF]`}>
            
            </div>
          </div>
        </div>
        <div className="w-[100%] aspect-[1/1]" onClick={nxt}>
          <svg viewBox="0 0 40 40" className="flex justify-center items-center rotate-[180deg] opacity-70 hover:opacity-100 group">
            <g>
              <rect width="40" height="40" stroke="#007BFF" fill="none" strokeWidth="3"/>
              <polyline points="12,22 20,12 28,22" stroke="#007BFF" strokeWidth="3" fill="none" strokeLinecap="round" strokeDasharray="6 4"/>
            </g>
          </svg>
        </div>
      </div>
      <scroll.Provider value={{scrl1, scrl2, scrl3}}>
        <Routes>
          <Route path='' element={<Home/>}/>
        </Routes>
      </scroll.Provider>
    </div>
  );
}

export {App, scroll};
