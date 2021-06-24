// GLOBAL VARIABLES (accessible by all functions)
// ==================================================================================================

// Array of Word Options (all lowercase)
var wordsList = ["jerome", "neena", "darion", "lou", "greg", "jordan",
  "jasmine", "stephen", "jacob", "adam", "rui", "luis"];
// Solution will be held here.
var chosenWord = "";
// This will break the solution into individual letters to be stored in array.
var lettersInChosenWord = [];
// This will be the number of blanks we show based on the solution
var numBlanks = 0;
// Holds a mix of blank and solved letters (ex: 'n, _ _, n, _').
var blanksAndSuccesses = [];
// Holds all of the wrong guesses
var wrongGuesses = [];

// Game counters
var winCounter = 0;
var lossCounter = 0;
var numGuesses = 9;

// FUNCTIONS (These are bits of code that we will call upon to run when needed)
// =========================================================================================


reset();
function reset() {
      /* start config options */
      currentWord = wordsList[Math.floor(Math.random() * wordsList.length)];
       lettersInChosenWord= currentWord.split("");
      numGuesses=9;
      numBlanks = lettersInChosenWord.length;
      for (let i=0 ; i < numBlanks; i++) {
        blanksAndSuccesses.push("_");
      }
function winLoss(){
  document.getElementById("guesses-left").textContent = numGuesses;
  document.getElementById("word-blanks").textContent = blanksAndSuccesses.join(" ");
  document.getElementById("wrong-guesses").textContent = wrongGuesses.join(" ");
}
    }

function checkGuess(letter){
  var isGuessRight = false;
  for (let i=0; j <numBlanks; i++)
    if (chosenWord[i] === letter) {
      isGuessRight = true;
    
  }
  
  if(isGuessRight == true) {
    for (let j=0; j< numBlanks;j++) {
      if (chosenWord[j] === letter) {
        blanksAndSuccesses = letter;
      }
    }
  }
  else {wrongGuesses.push(letter);
  numGuesses--;
  }
document.onkeyup = function(event){
  if( event.keycode >= 65 && event.keycode <= 90){
    var letterGuess = event.key.toLowerCase();
    checkGuess(letterGuess)
    
  }
} 


function winLoss(){
  if (lettersInChosenWord.toString() === blanksAndSuccesses.toString()) {
    winCounter++;
    document.getElementById("win-counter").textContent = winCounter
    reset();
  }
  else if (numGuesses === 0){
    lossCounter++;
    document.getElementById("loss-counter").textContent = lossCounter;
    reset()
  }
  document.getElementById("guesses-left").textContent = numGuesses;
  document.getElementById("word-blanks").textContent = blanksAndSuccesses.join(" ");
  document.getElementById("wrong-guesses").textContent = wrongGuesses.join(" ");
}
}
