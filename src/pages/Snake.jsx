import React, { useState, useEffect, useRef } from 'react'
import { Navbar, Footer } from '../components'
import { useInterval } from '../contexts/ContextProvider';


// constants for game
const CANVAS_SIZE = [800, 800];
const SNAKE_START = [
  [8, 7],
  [8, 8]
];
const APPLE_START = [8, 3];
const SCALE = 40;
const SPEED = 100;
const DIRECTIONS = {
  38: [0, -1], // up
  40: [0, 1], // down
  37: [-1, 0], // left
  39: [1, 0] // right
};


const Snake = () => {

  const canvasRef = useRef();
  const [snake, setSnake] = useState(SNAKE_START);
  const [apple, setApple] = useState(APPLE_START);
  const [dir, setDir] = useState([0, -1]);
  const [speed, setSpeed] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  useInterval(() => gameLoop(), speed);

  const endGame = () => {
    setSpeed(null);
    setGameOver(true);
  };

  const moveSnake = ({ keyCode }) =>
    keyCode >= 37 && keyCode <= 40 && setDir(DIRECTIONS[keyCode]);

  const createApple = () =>
    apple.map((_a, i) => Math.floor(Math.random() * (CANVAS_SIZE[i] / SCALE)));

  const checkCollision = (piece, snk = snake) => {
    if (
      piece[0] * SCALE >= CANVAS_SIZE[0] ||
      piece[0] < 0 ||
      piece[1] * SCALE >= CANVAS_SIZE[1] ||
      piece[1] < 0
    )
      return true;

    for (const segment of snk) {
      if (piece[0] === segment[0] && piece[1] === segment[1]) return true;
    }
    return false;
  };

  const checkAppleCollision = newSnake => {
    if (newSnake[0][0] === apple[0] && newSnake[0][1] === apple[1]) {
      let newApple = createApple();
      while (checkCollision(newApple, newSnake)) {
        newApple = createApple();
      }
      setApple(newApple);
      return true;
    }
    return false;
  };

  const gameLoop = () => {
    const snakeCopy = JSON.parse(JSON.stringify(snake));
    const newSnakeHead = [snakeCopy[0][0] + dir[0], snakeCopy[0][1] + dir[1]];
    snakeCopy.unshift(newSnakeHead);
    if (checkCollision(newSnakeHead)) endGame();
    if (!checkAppleCollision(snakeCopy)) snakeCopy.pop();
    setSnake(snakeCopy);
  };

  const startGame = () => {
    setSnake(SNAKE_START);
    setApple(APPLE_START);
    setDir([0, -1]);
    setSpeed(SPEED);
    setGameOver(false);
  };

  useEffect(() => {
    const context = canvasRef.current.getContext("2d");
    context.setTransform(SCALE, 0, 0, SCALE, 0, 0);
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    context.fillStyle = "#F3DFBF";
    snake.forEach(([x, y]) => context.fillRect(x, y, 1, 1));
    context.fillStyle = "#40d6ae";
    context.fillRect(apple[0], apple[1], 1, 1);
  }, [snake, apple, gameOver]);


  return (
    <>
      <Navbar />

      <div className='bg-darkblue flex flex-col h-screen w-screen place-content-center items-center' role="button" tabIndex="0" onKeyDown={e => moveSnake(e)}>

        <h1 className='text-gold text-6xl mb-10'>SNAKE</h1>

        <canvas
          className='border-2 border-gold bg-darkpurple h-3/5 rounded-xl mb-10' ref={canvasRef} width={`${CANVAS_SIZE[0]}px`} height={`${CANVAS_SIZE[1]}px`}
        />

        <button onClick={startGame} className=' flex text-gold text-3xl font-bold underline leading-5'>START GAME</button>

        {gameOver && 
          <div className='mt-5'>
              <h1 className='text-mintgreen text-3xl font-bold text-center'>GAME OVER!
              </h1>

              <h2 className='text-mintgreen text-md font-bold text-center'>
                PRESS SPACE TO PLAY AGAIN
              </h2>

            </div>}

      </div>

      <Footer />
    </>
  )
}

export default Snake