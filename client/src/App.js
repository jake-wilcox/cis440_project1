import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Login, Register, Snake, TicTacToe, Hangman, Games, Leaderboard } from './pages';


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

            <Route path='/leaderboard' element={<Leaderboard /> } />

            <Route path='/snake' element={<Snake />} />

            <Route path='/hangman' element={<Hangman />} />

            <Route path='/tictactoe' element={<TicTacToe />} />

          </Routes>
        </div>

        
      </BrowserRouter>
    </div>
  )
}

export default App