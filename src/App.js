import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Login, Register, Settings, Snake, TicTacToe, Hangman, Games } from './pages';

import { Navbar, Footer } from './components';

// import { useStateContext } from './contexts/ContextProvider';


import './App.css';

const App = () => {
  
  return (
    <div>
      <BrowserRouter>

        <div>
          <Routes>
            
            <Route path='/login' element={<Login />} />

            <Route path='/register' element={<Register />} />

            <Route path='/' element={<Games />} />

            <Route path='/settings' element={<Settings />} />

            <Route path='/snake' element={<Snake />} />

            <Route path='/hangman' element={<Hangman />} />

            <Route path='/tictactoe' element={<TicTacToe />} />
          </Routes>
        </div>

        {/* <Footer /> */}

        
      </BrowserRouter>
    </div>
  )
}

export default App