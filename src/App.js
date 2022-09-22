import React, {useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Login, Register, Settings, Snake, TicTacToe, Hangman } from './pages';

import { Navbar, Footer } from '/src/components';

import { useStateContext } from './contexts/ContextProvider';


import './App.css';

const App = () => {
  
  return (
    <div>
      <BrowserRouter>
        <div className='flex relative'>
          <div className='fixed top-2'>
            <Navbar />

          </div>
        </div>

        <div>
          <Routes>
            <Route />
            <Route />

          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
