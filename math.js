const badWords = ['horrible', 'stinky', 'fatty', 'sticky']
const animals = ['cockroach', 'worm', 'pork']

const insultPart1 = badWords[Math.floor(Math.random() * badWords.length)]

const insultPart2 = animals[Math.floor(Math.random() * animals.length)]

const insult = `You are a ${insultPart1} ${insultPart2}`

console.log(insult)


// Extend the random insult generator so it generates insults like 
// “Your [body part] is more [adjective] than a [animal]’s [animal body part].” 
// (Hint: You’ll need to create another array.)


const bodyWords = ['head', 'neck', 'arm', 'hair', 'leg', 'mouth', 'nose']
const adjectives = ['larger', 'furry', 'pretty', 'big']
const animals2 = ['bear', 'pussy', 'horse', 'pig', 'wale']
const animalBodyParts = ['ears', 'tale', 'paw', 'horn']

const randomWords = arr => arr[Math.floor(Math.random() * arr.length)]

const str = `Your ${randomWords(bodyWords)} is more ${randomWords(adjectives)} than a ${randomWords(animals2)}’s ${randomWords(animalBodyParts)}.`
const strOption2 = ['Your', randomWords(bodyWords), 'is more', randomWords(adjectives), 'than a', randomWords(animals2), '\'s' ,randomWords(animalBodyParts)].join(' ')
const strOption3 = "Your" + ' ' + randomWords(bodyWords) + ' ' + randomWords(adjectives) + ' ' + 'than a' + ' ' + randomWords(animals2) + ' ' + '\'s' + randomWords(animalBodyParts)

console.log(str)