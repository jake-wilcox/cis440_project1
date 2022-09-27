var word_bank = [
    "pins",
    "keys",
    "piano",
    "ice",
    "desk",
    "chair",
    "laptop",
    "coat",
    "duck",
    "horse",
    "blue",
    "novel",
    "script",
    "warm",
    "light",
    "gold",
    "magnet",
    "kale",
    "orange",
    "zebra",
    "ship",
    "tarp",
]

function randomWord() {
    return word_bank[Math.floor(Math.random()* word_bank.length)];
}

export { randomWord}