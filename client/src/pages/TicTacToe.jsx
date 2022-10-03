import React from 'react'
import { Navbar } from '../components'
import TicTacToeGame from '../components/TicTacToeGame';

function TicTacToeApp() {

  return (
    <>
      <Navbar />
      <TicTacToeGame />
    </>
  );
}

export default TicTacToeApp