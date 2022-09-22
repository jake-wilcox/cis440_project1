import random
from tkinter import N
 
print('Welcome to Hang Man')
print("Let's play!\n\n")
 
def main():
    global count
    global word
    global already_guessed
    global length
    global play_game
    global display
    global chosen_word

    word_bank = ['ant', 'shirt', 'clock', 'tiger', 'phone', 'cloud', 'duck', 'lungs', 'plane', 'spine', 'apple', 'math', 'pod', 'note', 'zebra', 'sugar', 'snow', 'pens', 'photo']
    word = random.choice(word_bank)
    length = len(word)
    count = 0
    display = '_ ' * length
    already_guessed = []
    chosen_word = word
    play_game = ""
 
def play_again():
   global play_game
   play_game = input("Would you like to play again? (y/n)\n").lower()
   if play_game == "y":
       main()
   elif play_game == "n":
       print("Thanks for playing! See you soon \U0001F600")
       # what happens when game ends? 
       exit()
   while play_game not in ['y','n']:
       play_game = input('Would you like to play again? (y/n)\n')
  
def hangman():
    global count
    global word
    global already_guessed
    global play_game
    global length
    global display

    # number of guesses
    limit = 5 

    guess = input("The Hangman Word is: " + display + "\nEnter your guess: \n").lower()
    guess = guess.strip()
    if len(guess.strip()) == 0 or len(guess.strip()) > 2:
        print("Invalid input. Please enter a letter.\n")
        hangman()
    elif guess in word:
        already_guessed.extend([guess])
        index = word.find(guess)
        word = word[:index] + "_" + word[index +1:]
        display = display[:index] + guess + display[index + 1:]
        print(display + "\n")
    elif guess in already_guessed:
        print("You have already guessed this letter. Try another letter.")
    else:
        count += 1

    if count == 0:
        print("   _____ \n"
                "  |     | \n"
                "  |      \n"
                "  |      \n"
                "  |      \n"
                "  |      \n"
                "  |      \n"
                "__|__\n")
        print("Let's Play!\n")
    elif count == 1:
        print("   _____ \n"
                "  |     | \n"
                "  |      \n"
                "  |      \n"
                "  |      \n"
                "  |      \n"
                "  |      \n"
                "__|__\n")
        print("You guessed: " + guess + "\n" + str(limit - count) + " guesses remaining\n")

    elif count == 2:
        print("   _____ \n"
                "  |     | \n"
                "  |     |\n"
                "  |      \n"
                "  |      \n"
                "  |      \n"
                "  |      \n"
                "__|__\n")
        print("You guessed: " + guess + "\n" + str(limit - count) + " guesses remaining\n")

    elif count == 3:
        print("   _____ \n"
                "  |     | \n"
                "  |     |\n"
                "  |     | \n"
                "  |      \n"
                "  |      \n"
                "  |      \n"
                "__|__\n")
        print("You guessed: " + guess + "\n" + str(limit - count) + " guesses remaining\n")

    elif count == 4:
        print("   _____ \n"
                "  |     | \n"
                "  |     |\n"
                "  |     | \n"
                "  |     O \n"
                "  |      \n"
                "  |      \n"
                "__|__\n")
        print("You guessed: " + guess + "\n" + str(limit - count) + " guesses remaining\n")

    elif count == 5:
        print("   _____ \n"
                "  |     | \n"
                "  |     |\n"
                "  |     | \n"
                "  |     O \n"
                "  |    /|\ \n"
                "  |    / \ \n"
                "__|__\n")
        print("You are out of guesses. The word is: ", chosen_word, "\n")
        play_again()

    if word == '_' * length:
        print("Congrats! You guessed the word correctly")
        play_again()

    elif count != limit:
        hangman()

main()

hangman()