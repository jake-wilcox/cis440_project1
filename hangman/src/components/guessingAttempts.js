export default function GuessingAttempts() {
    const guessedLetters = ['a', 'b', 'c','d'];

    return (
        <div className = "col">
            <h3>Number of guesses: {guessedLetters.length}</h3>
            <h3>Guessed letters:</h3>
            <h4>{guessedLetters.join(', ')}</h4>
        </div>
    );
};