import React, {useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Login from './pages/Login'
import Register from './pages/Register'


import { useStateContext } from './contexts/ContextProvider';


import './App.css';

const App = () => {
  
  return (
    <div>
      <div>
        

      </div>

      <BrowserRouter>
        <div className='flex relative'>
          <div className='fixed top-2'> 


          {/* Header div */}
          <div>
            <h1>KoolGamez</h1>
          <Navbar />
          </div>
            
          

          </div>
        </div>

        <div>
          <Routes>
            {/*Login Screen*/}
            <Route path='/login' element={<Login />} />

            <Route path='/register' element={<Register />} />

            {/* <Route path='/settings' element={<Settings />} />

            <Route path='/snake' element={<Snake />} />

            <Route path='/hangman' element={<Hangman />} />

            <Route path='/tictacotoe' element={<TicTacToe />} /> */}
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}
export default App