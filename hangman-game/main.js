// #1 random word

const words = ['javascript', 'programming', 'code', 'computer']

const randomWord = words[Math.floor(Math.random(words) * words.length)]

// #2 remain letters

const answearArray = []

for (let i = 0; i < randomWord.length; i++) {
  answearArray[i] = '_'
}

const remainLetters = randomWord.length


while (remainLetters > 0) {
  alert(answerArray.join(" "));
  let guess = prompt('Guess a letter, or click Cancel to stop playing.')
  if (guess === null) {
    break;
  } else if (guess.length !== 1) {
    alert('Please enter a single letter.')
  } else {
    for (let j = 0; j < word.length; j++) { 
      if (word[j] === guess) {
      answerArray[j] = guess
      remainingLetters--
      } 
    }
  }
}


alert(answerArray.join(" "));
alert("Good job! The answer was " + word);