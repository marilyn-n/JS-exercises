const scores = {
  itza: 0,
  lily: 0,
  purito: 0
}

scores.itza += 9
scores.lily += 6
scores.purito += 7

console.log(scores)

scores.itza += 2
scores.lily += 4
scores.purito += 2

console.log(scores, '<<<-- new values')

var myCrazyObject = {
  "name": "A ridiculous object",
  "some array": [7, 9, { purpose: "confusion", number: 123 }, 3.3], 
  "random animal": "Banana Shark"
  }

console.log(myCrazyObject["some array"][2].number)