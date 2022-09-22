import React, {useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import { Login, Register, Settings, Snake, TicTacToe, Hangman } from './pages';

// import { Navbar, Footer } from './components';

import Login from './pages/Login';
import Register from './pages/Register';
import Hangman from './pages/Hangman';
import Snake from './pages/Snake';
import TicTacToe from './pages/TicTacToe';
import Settings from './pages/Settings';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

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
            {/*Login Screen*/}
            <Route path='/login' element={<Login />} />

            <Route path='/register' element={<Register />} />

            <Route path='/settings' element={<Settings />} />

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