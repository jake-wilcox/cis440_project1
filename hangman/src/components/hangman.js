import React, {Component} from 'react';
import { randomWord } from './wordBank.js';

import step0 from "./images/0.jpeg";
import step1 from "./images/1.jpeg";
import step2 from "./images/2.jpeg";
import step3 from "./images/3.jpeg";
import step4 from "./images/4.jpeg";
import step5 from "./images/5.jpeg";
import step6 from "./images/6.jpeg";

class Hangman extends Component {
    static defaultProps = {
        totalAttempts: 6,
        images: [step0, step1, step2, step3, step4, step5, step6]
    };

    constructor(props) {
        super(props);
        this.state = {
            errors: 0, 
            guessed: new Set([]), 
            answer: randomWord()
        };
    };

    handleGuess = e =>  {
        let letter = e.target.value; 
        this.setState(st =>({
            guessed: st.guessed.add(letter),
            errors: st.errors + (st.answer.includes(letter) ? 0 : 1)
        }));
    };

    guessedWord() {
        return this.state.answer.split("").map(letter => (this.state.guessed.has(letter) ? letter : " _ "));
    };

    resetButton = () => {
        this.setState({
            errors: 0, 
            guessed: new Set([]),
            answer: randomWord()
        });
    };

    statButton () {
        return "abcdefghijklmnopqrstuvqxyz".split("").map(letter => (<button className = "btn mt-4 mr-4 btn-lg btn-letter" key = {letter} value = {letter} onClick = {this.handleGuess} disabled = {this.state.guessed.has(letter)}>
            {letter}
            </button>
        ));
    };


    render() {
        const gameOver = this.state.errors >= this.props.totalAttempts;
        const isWinner = this.guessedWord().join("") === this.state.answer;
        let gameStats = this.statButton();

        if (isWinner) {
            gameStats = "Yay! You guessed it."
        };
        if (gameOver) {
            gameStats  = "You lost! Click 'restart to play again."
        }; 


        return (
            <div className = "container">
                <h1 className = "text-center mt-4">Hangman</h1>
                <div>
                <p className = "text-center mt-4"><strong>Instructions</strong>: Please guess the letters by clicking on the buttons. You have 6 attempts. Good luck!</p>
                </div>
                <div className = "float-right">
                Guess {this.state.errors} of 6
                </div>
                <div className = "text-center">
                    {/* eslint-disable-next-line */}
                    <img src = {this.props.images[this.state.errors]} alt = "Image of Hangman Update"></img>
                </div>
                <br></br>
                <br></br>
                <div className='text-center'>
                    <p>
                        {!gameOver ? this.guessedWord() : this.state.answer}
                    </p>
                    <p>{gameStats}</p>
                    <button className = 'btn btn-info' onClick = {this.resetButton}>Reset</button>
                </div>

               
                
            </div>
        );
    };
};

export default Hangman;
