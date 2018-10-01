// #1: Awesome Animals
// Write a for loop that modifies an array of animals, making them awesome! 

let animals = ['Cat', 'Fish','Lemur', 'Komodo Dragon'];

const myAnimals = (item) => {
  for (let i = 0; i < animals.length; i++) {
    item[0] = `Awesome ${item[0]}`
    item[1] = `Awesome ${item[1]}`
    item[2] = `Awesome ${item[2]}`
    item[3] = `Awesome ${item[3]}`
    return animals
  }
}

console.log(myAnimals(animals))

// expected output
// ['Awesome Cat', 'Awesome Fish', 'Awesome Lemur', 'Awesome Komodo Dragon']

// Random String Generator
const words = () => {
  let randomString = ''
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'

  while (randomString.length <= 6) {
    const randomLetter = alphabet[Math.floor(Math.random(alphabet) * alphabet.length)]
    randomString += randomLetter
  }
    return randomString
  }

console.log(words())

// expected output
/* 
bgxamid
tmibzfr
povxrjq
*/

const hackerSpeaker = (input) => {
  let output = ''

  for (let i = 0; i < input.length; i++) {
    const element = input[i]
    if (element === 'a') {
      output += '4'
    } else if (element === 'e') {
      output += '3'
    } else if (element === 'i') {
      output += '1'
    } else if (element === '0') {
      output += '0'
    } else {
      output += element
    }
  }
  return output
}

console.log(hackerSpeaker('javascript is awesome my friend'))

// expected output 
// j4v4scr1pt 1s 4w3som3 my fr13nd