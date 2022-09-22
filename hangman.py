import random
 
print('Welcome to Hang Man')
print("Let's play!")
 
def main():
   global count
   global word
   global already_guessed
   global length
   global play_game
   global display
 
   word_bank = 'ant september clock tiger giraffe cloud duck lungs seesaw keyboard plane banana spinach kale professor math computer note zebra sugar skiier pencil cockroach photo'.split()
  
   word = random.choice(word_bank)
   length = len(word)
   count = 0
   display = '_' * length
   already_guessed = []
   play_game = ""
 
def play_again():
   global play_game
   play_game = input("Would you like to play again? (Y/N)").lower()
   if play_game == "y":
       main()
   elif play_game == "n":
       print("Thanks for playing. See you soon :)")
       # what hapens when game ends? exit()
   while play_game not in ['y','n']:
       play_game = input('Would you like to play again? (Y/N)')
  
def hangman():
    global count
    global word
    global already_guessed
    global play_game
    global length
    global display

    # number of guesses
    limit = 6 

    guess = input("The Hangman Word is: " + display + "\nEnter your guess: \n")
    guess = guess.strip()
    if len(guess.strip()) == 0 or len(guess.strip()) > 2 or guess <= "9":
        print("Invalid input. Please enter a letter.\n")
        hangman()
    elif guess in word:
        already_guessed.extend([guess])
        index = word.find(guess)
        word = word[:index] + "_" + word[index +1:]
        print(display + "\n")
    elif guess in already_guessed:
        print("You have already guessed this letter. Try another letter.")
    else:
        count += 1

        if count == 1:

# work in progress: building the scaffold for hangman

        # print ("_________\n"
#       print ("|    |")
#       print ("|")
#       print ("|")
#       print ("|")
#       print ("|")
#       print ("|________")
#     elif(guesses == 1):
#         print ("_________")
#       print ("|    |")
#       print ("|    O")
#       print ("|")
#       print ("|")
#       print ("|")
#       print ("|________")
#     elif(guesses == 2):
#       print ("_________")
#       print ("|    |")
#       print ("|    O")
#       print ("|    |")
#       print ("|    |")
#       print ("|")
#       print ("|________")


main()

hangman()