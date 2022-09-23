import React, {useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Login, Register, Settings, Snake, TicTacToe, Hangman } from './pages';

import { Navbar, Footer } from './components';

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

        <Navbar>
        <div>
          {/* Navbar Login */}
            <Route path='/login' element={<Login />} />

            <Route path='/register' element={<Register />} />

            <Route path='/settings' element={<Settings />} />
        </div>
        </Navbar>



        <div>
          <Routes>

            <Route path='/snake' element={<Snake />} />

            <Route path='/hangman' element={<Hangman />} />

            <Route path='/tictacotoe' element={<TicTacToe />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App