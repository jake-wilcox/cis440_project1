import React from 'react'
import { Navbar } from '../components';
import { HangmanGame} from '../components/HangmanGame';

function Hangman () {
  return (
    <> 
      <Navbar />
      <HangmanGame />
     </>      
  );
};

export default Hangman