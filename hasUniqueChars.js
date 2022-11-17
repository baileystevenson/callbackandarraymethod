// Write your code below

let wordArr = ['moon', 'yes', 'beef', 'butter', 'black']

function hasUniqueCharacters(wordArr){
let uniqueCharacters = new Set([])
for(let i = 0; i < wordArr.legth; i++) {
    uniqueCharacters.add(wordArr[i])
    if(hasUniqueCharacters){
        return 'True';
    } else{
        return 'False';
    }
}
return uniqueCharacters === wordArr.length
}
console.log(hasUniqueCharacters(wordArr))
  