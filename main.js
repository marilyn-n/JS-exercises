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