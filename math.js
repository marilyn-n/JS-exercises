const badWords = ['horrible', 'stinky', 'fatty', 'sticky']
const animals = ['cockroach', 'worm', 'pork']

const insultPart1 = badWords[Math.floor(Math.random() * badWords.length)]

const insultPart2 = animals[Math.floor(Math.random() * animals.length)]

const insult = `You are a ${insultPart1} ${insultPart2}`

console.log(insult)