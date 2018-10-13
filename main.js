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

const insultGenerator = (arr) => arr[Math.floor(Math.random() * arr.length)]
const randomInsult = `Your ${insultGenerator(randomBodyParts)} is like a ${insultGenerator(randomAdjectives)} ${insultGenerator(randomWords)} !!!`

console.log(randomInsult)

const add = (x, y) => x + y

const multiply = (n, m) => n * m 

// console.log(add(777))
add(777, multiply(36325,9824))

// Using only these two functions, solve this simple mathematical problem:
// 36325 * 9824 + 777