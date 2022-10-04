import React from 'react'
import { GameTile } from '../components';
import { HangmanImg, SnakeImg, TicTacToeImg } from '../data';
import { Navbar, Footer } from '../components'

const Games = () => {

  return (
    <>
      <Navbar/>

      <div className='flex justify-center w-full
      h-full bg-darkblue pt-40 pb-64'>


        <GameTile image={HangmanImg} title='Hangman' route='./hangman'/>

        <GameTile image={SnakeImg} title='Snake' route='./snake' />

        <GameTile image={TicTacToeImg} title='TicTacToe' route='./tictactoe' />
      </div>

      <Footer />
    </>
  )
}


export default Games