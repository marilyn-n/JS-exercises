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
