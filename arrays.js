// arrays are like a list type - they're a list kept in an order
// objects are mapping types like a dictionary, Hashmap - have keys and values assocaited with each other

// use [] to define an array, length is not fixed
// use array[index] to access and modify elements

let animals = ['duck', 'bear', 'squirrel']
console.log(animals) // [ 'duck', 'bear', 'squirrel' ]
console.log(animals[0]) // duck

//MODIFYING ELEMENTS

//access elements by index
console.log(animals[0]) // duck
let first_animal = animals[0] // assigns first_animal as = 'duck'

//modify elements by index
animals[2] = 'mouse'
console.log(animals) // [ 'duck', 'bear', 'mouse' ]

// you can store the same type or mix of data types but if you're grouping data it's more likely all the data would be the same type
// you can assign a value to a specific place - if we assigned a value to say the tenth spot
// JS would also assign an undefined value to any 'empty' spots

animals.push('goose')
//will add goose to the end of the array
console.log(animals)

animals.unshift('quail')
//will add quail to the BEGGINING of an array
console.log(animals)

let firstAnimal = animals.shift() // removes first item in array
console.log(firstAnimal) //quail - wanted to verify what was removed, add let to have a variable that can print
console.log(animals)

let lastAnimal = animals.pop()
console.log(lastAnimal) // goose
console.log(animals) //[ 'duck', 'bear', 'mouse' ]

// REVERSE THE ORDER OF THE ARRAY
animals.reverse()
console.log(animals) //[ 'mouse', 'bear', 'duck' ]

// SORT THE ARRAY ALPHABETICALLY
animals.sort()
console.log(animals) // [ 'bear', 'duck', 'mouse' ]

// HOW MANY THINGS THERE ARE???
let numberofAnimals = animals.length
console.log(numberofAnimals) // 3

// CHECK TO SEE IF A VALUE IS CONTAINED IN THE ARRAY
console.log(animals.indexOf('mouse')) // 2 stored in the 3rd spot - rememeber 0!
// returns -1 if not found
if (animals.indexOf('walrus') == -1) {
    console.log('walrus is not in the array')
}

// Can check to see if the array includes a value
// A little different - returns a Boolean value
if (animals.includes('bear')) {
    console.log('bear is included in the array')
}

// JOIN AN ARRAY WITH A STRING
console.log(animals.join(', ')) //default is just a comma so without any input looks like:
// bear,duck,moose
// i inputted space to get bear, duck, moose

animals.forEach( function(animal) {
    console.log(animal.toUpperCase())
})
// BEAR
// DUCK
// MOUSE

animals.forEach ( function(animalTextLength){
    console.log(animalTextLength.length)
})
// prints the number of characters for each item

// TASK CREATE A NEW ARRAY THAT CONTAINS THE CHARACTER LENGTH OF EACH ITEM
let animalsNameLength = [] // setting new empty array
animals.forEach ( function(animalTextLength){
    let length = animalTextLength.length
    animalsNameLength.push(length)
})

console.log(animalsNameLength)






