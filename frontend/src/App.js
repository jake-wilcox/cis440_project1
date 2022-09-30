import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Login, Register, Settings, Snake, TicTacToe, Hangman, Games, Leaderboard } from './pages';

import { Navbar, Footer } from './components';

// import { useStateContext } from './contexts/ContextProvider';


import './App.css';

const App = () => {
  
  return (
    <div>
      <BrowserRouter>
  

        <Navbar />

        <div>
          <Routes>
            <Route path='/' element={<Games />} />
            
            <Route path='/login' element={<Login />} />

            <Route path='/register' element={<Register />} />

            <Route path='/settings' element={<Settings />} />

            <Route path='/snake' element={<Snake />} />

            <Route path='/hangman' element={<Hangman />} />

            <Route path='/tictactoe' element={<TicTacToe />} />

            <Route path='/leaderboard' element={<Leaderboard />} />



          </Routes>
        </div>

        {/* <Footer /> */}

        
      </BrowserRouter>
    </div>
  )
}

export default App