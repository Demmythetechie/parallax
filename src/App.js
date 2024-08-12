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
  };

  const prv = () => {
    setscrl1('up');
    setscrl2('imgup');
  };

  return (
    <div className="relative w-[100%] flex flex-col justify-between">
      <div className='absolute w-[10%] aspect-[1/5.15] z-20 left-[90%] flex flex-col justify-between items-center py-[5%]'>
        <div className="w-[40%] aspect-[1/1]" onClick={prv}>
          <svg viewBox="0 0 40 40" className="flex justify-center items-center opacity-70 hover:opacity-100 group">
            <g>
              <circle className="group-hover:animate-[rnd_1s_ease-in-out_1] group-hover:delay-0 group-hover:fill-mode-forwards" cx="20" cy="20" r="16" stroke="#007BFF" fill="none" strokeWidth="2" strokeDasharray="24 4" strokeDashoffset="0"/>
              <polyline points="12,22 20,12 28,22" stroke="#007BFF" strokeWidth="3" fill="none" strokeLinecap="round" strokeDasharray="6 4"/>
            </g>
          </svg>
        </div>
        <div className="w-[40%] aspect-[1/1]" onClick={nxt}>
          <svg viewBox="0 0 40 40" className="flex justify-center items-center rotate-[180deg] opacity-70 hover:opacity-100 group">
            <g>
              <circle className="group-hover:animate-[rnd_1s_ease-in-out_1] group-hover:delay-0 group-hover:fill-mode-forwards" cx="20" cy="20" r="16" stroke="#007BFF" fill="none" strokeWidth="2" strokeDasharray="24 4" strokeDashoffset="0"/>
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
