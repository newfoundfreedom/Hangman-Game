// -------------------------------------
// Javascript file for Hangman game
// Joel Roberts - February 2017
// -------------------------------------

// Create variables to hold number of Wins (winCount), word (selectedWord),
//  remaining guesses (guessCount);

// Create arrays to hold words (wordBank); wrong guesses (badGuess)

// Wait for user to click any key to start game

// Select a random word from wordBank array and load it into
//  selectedWord variable

// For each character in selectedWord push it into the currentWord array;
//  so that each character is assigned its own index number

// Create a separate array (displayWord) the same length of the
//  currentWord array and assign each index a value of "_" to start

// Listen for user to click a key and capture that in the userPress
//  variable and push that value to the userGuesses array

// Check to see if the userPress value matches each index position
//  in the currentWord array

// For each position that matches, update that position in the
//  displayWord variable displaying that to the screen

// If the guess does not match any positions in the displayWord variable
//  then log that guess (capitalizing it) in the badGuess array and
//  decriment the number of guesses by one

// Check to see if the displayWord equals the currentWord array

// If the words match then restart routine with a new word

// If words dont match and guessCount is greater than 0 then continue play
