import './App.css';
// import TicTacToe from './components/tictactoe.js';
import Board from './components/board.js';

function App() {
  const board = ["X","X","X","X","X","X","X","X","X"]

  return (
    <div className="App">
      <Board board = {board} onClick = {()=> onClick(i)}/>
    </div>
  );
}

export default App;
