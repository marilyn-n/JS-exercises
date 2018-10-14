const pickWord = () => {
  // Return a random word
  const words = ['javascript', 'programming', 'code', 'computer']
  const word = [Math.floor(Math.random() * words.length)]
  return word
}

const setupAnswerArray = (word) => {
  // Return the answer array
  const answearArray = []
  for (let i = 0; i < word.length; i++) {
    answearArray[i] = '_'
  }
  return answearArray
}

const showPlayerProgress = (answerArray) => {
  // Use alert to show the player their progress
  // alert(answerArray.join(' '))
}

const getGuess = _ => {
  // Use prompt to get a guess
  // let guess = prompt('Guess a letter, or click Cancel to stop playing.')
  // return guess
}

const updateGameState = (guess, word, answerArray) => {
  // Update answerArray and return a number showing how many
  // times the guess appears in the word so remainingLetters
  // can be updated
  
  for (let j = 0; j < word.length; j++) { 
    if (word[j] === guess) {
    answerArray[j] = guess
    remainingLetters--
    } 
  }
}

const showAnswerAndCongratulatePlayer = (answerArray, word) => {
  // Use alert to show the answer and congratulate the player
  alert(answerArray.join(' '))
  alert(`Good job! The answer was ${word}`)
}



const word = pickWord()
const answerArray = setupAnswerArray(word)
const remainingLetters = word.length
while (remainingLetters > 0) { 
  showPlayerProgress(answerArray)
  const guess = getGuess()
if (guess === null) {
  break;
  } else if (guess.length !== 1) {
      alert('Please enter a single letter.')
  } else {

const correctGuesses = updateGameState(guess, word, answerArray)
  remainingLetters -= correctGuesses
  }
} 
showAnswerAndCongratulatePlayer(answerArray)