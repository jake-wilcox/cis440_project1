import React from 'react'
import { GameTile } from '../components';
import { HangmanImg, SnakeImg, TicTacToeImg } from '../data';


const Games = () => {

  return (
    <div className='flex justify-center py-10 mt-32'>
      <GameTile image={HangmanImg} title='Hangman' route='./hangman' />

      <GameTile image={SnakeImg} title='Snake' route='./snake' />

      <GameTile image={TicTacToeImg} title='TicTacToe' route='./tictactoe' />
    </div>
  )
}

export default Games