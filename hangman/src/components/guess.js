export default function Guess() {
    const word = 'he_lo';

    return (
        <div className = "mt-4">
            {word.split('').map((letter, i) => 
                <h1 className = "d-inline-block mr-4" key = {i}>{letter}</h1>
            )};
        </div>
    );
};