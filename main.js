// Draw cats

const drawCats = cats => {
  for(let i = 0; i < cats; i++){
    console.log(i + ' =^.^=')
  }
}

console.log(drawCats(10))


// if someone is 13 or over, they’re allowed in. 
// If they’re not over 13, but they are accompanied by an adult, they’re also allowed in. 
//Otherwise, they can’t see the movie.
                  
let age = 12;
let accompanied = false;

if( age >= 13){
  console.log('allowed to watch the movie')
} else if(age < 13 && accompanied){
  console.log('ok you can watch the movie because you came with an adult')
} else {
  console.log('You cant watch this movie!')
}

// Random insult generator

 const randomBodyParts = ['Face', 'Nose', 'Hair', 'Mouth']

 const randomAdjectives = ['Smelly', 'Boring', 'Stupid', 'Dirty']

 const randomWords = ['Fly', 'Marmot', 'Stick', 'Monkey', 'Rat', 'Bug']

// Pick a random body part from the randomBodyParts array:
const randomBodyPart = randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)]
// Pick a random adjective from the randomAdjectives array:
const randomAdjective = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)]
// Pick a random word from the randomWords array:
const randomWord = randomWords[Math.floor(Math.random() * randomWords.length)]
// Join all the random strings into a sentence:
const randomInsult = `Your ${randomBodyPart} is like a ${randomAdjective} ${randomWord} !!!`

console.log(randomInsult)