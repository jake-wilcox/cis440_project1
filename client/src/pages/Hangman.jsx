import React, {Component} from 'react';
import { randomWord } from '../components/WordBank';
import scoreToDb from '../components/ScoreToDb';
import { Navbar, Footer } from '../components';

import { step0, step1, step2, step3, step4, step5, step6 } from '../data';

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
        return "abcdefghijklmnopqrstuvqxyz".split("").map(letter => (<button className = "btn mt-4 mr-4 btn-lg btn-letter text-gold border-1 border-gold rounded-lg hover:text-mintgreen hover:border-mintgreen" key = {letter} value = {letter} onClick = {this.handleGuess} disabled = {this.state.guessed.has(letter)}>
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

            const user = JSON.parse(localStorage.getItem('user_info'))
            const oldScore = user['hangmanScore']
            const addedScore = 1

            scoreToDb('hangmanScore', oldScore, addedScore, user)

            user['hangmanScore'] = oldScore + 1
            localStorage.setItem('user_info', JSON.stringify(user))

        };
        if (gameOver) {
            gameStats  = "You lost! Click 'reset' to play again."
        }; 


        return (
          <>
          <Navbar />
            <div className = "bg-darkblue h-screen">
                <h1 className = "text-center pt-5 text-gold text-5xl">Hangman</h1>
                <div>
                <p className = "text-center text-gold text-xl mt-2"><strong>Instructions</strong>: Please guess the letters by clicking on the buttons. You have 6 attempts. Good luck!</p>
                </div>

                <div className = "text-center pt-10 text-gold text-2xl">
                Guess {this.state.errors} of 6
                </div>

                <div className = "text-center flex justify-center">
                    {/* eslint-disable-next-line */}
                    <img src = {this.props.images[this.state.errors]} alt = "Image of Hangman Update"></img>
                </div>

                <br></br>
                <br></br>
                <div className='text-center text-gold text-3xl px-3'>
                    <p>
                        {!gameOver ? this.guessedWord() : this.state.answer}
                    </p>

                    <p>{gameStats}</p>
                    
                    <button className = 'btn btn-info bg-mintgreen mt-12 text-darkpurple font-bold text-xl' onClick = {this.resetButton}>Reset</button>
                </div>
                
            </div>

            <Footer />
          </>
        );
    };
};

export default Hangman