import './App.css';
import Hangman from './components/hangman';
// import GuessingAttempts from './components/guessingAttempts';
// import Guess from './components/guess';

function App() {
  return (
    <div className = "container"> 
      <Hangman />
     </div> 

  /* <h1 className = "text-center mt-4">Hangman</h1>
      <div>
      <p className = "text-center mt-4">Instructions: Please guess the letters by clicking on the buttons. You have 6 attempts. Good luck!</p>
      </div>
      <div className = "row mt-4">
      <Hangman />
        <GuessingAttempts />
      </div>
      <div className = "text-center">
      <Guess />
      {'abcdefghijklmnopqrstuvwxyz'.split('').map((letter,i) =>
      <button className = "btn mt-4 mr-4 btn-letter btn-lg" key = {i}>{letter}</button>
      )}
      <br></br>
      <button className = "btn mt-4 btn-reset btn-md">Reset</button> */
     
  );
}

export default App;
