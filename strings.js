let text = 'hello World'

let stringLength = text.length // length is a property
console.log(stringLength)
// 11 including space

let shout = text.toUpperCase() // these are methods - this cconverts to uppercase
let whisper = text.toLowerCase() // makes everything lowercase

let whereIsW = text.indexOf('W')
console.log(whereIsW)
// returns 6 because that's where the W character is in hello World
// if null returns -1

let whereIsw = text.indexOf('w')
console.log(whereIsw)
// capitialization matters - this returns -1

let whisperAndShout = whisper.concat(shout) // join strings together
console.log(whisperAndShout)
// hello worldHELLO WORLD

let replaceO = text.replace('o', 'O') //replace the first instance of first thing with second thing
// can also do global and more complex replacements with regular expressions
console.log(replaceO)
// hellO World
// ONLY THE FIRST 'o' IMPACTED

let replaceAllO = text.replace(/o/g, 'O') //replace all instances of the first thing with the second thing
console.log(replaceAllO)
//hellO WOrld

let removeWhitespace = text.trim() //remove spaces, tabs, newlines etc. from both ends of the string
console.log(removeWhitespace)
// hello World

console.log(stringLength, shout, whisper, whereIsW, whereIsw,
    whisperAndShout, replaceO, replaceAllO, removeWhitespace)

