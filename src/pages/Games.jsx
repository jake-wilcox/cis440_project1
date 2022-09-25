import React from 'react'
import { GameTile } from '../components';
import { HangmanImg, SnakeImg, TicTacToeImg } from '../data';
import styled from 'styled-components';
import { Navbar } from '../components'

const Games = () => {

  return (
    <>
      <Navbar />
      <div className='flex justify-center w-screen
      h-screen bg-darkblue pt-40'>

        <GameTile image={HangmanImg} title='Hangman' route='./hangman'/>

        <GameTile image={SnakeImg} title='Snake' route='./snake' />

        <GameTile image={TicTacToeImg} title='TicTacToe' route='./tictactoe' />
      </div>
    </>
  )
}


export default Games