//creating an array - square brackets
// behaves like a Python list

let birds = ['Owl', 'Robin', 'Eagle']
console.log(birds)
// [ 'Owl', 'Robin', 'Eagle' ]

// loop that prints each bird
// callback function = the word function -> () -> and curly braces

birds.forEach ( function(bird) {
    // could also do function(bird, index)
    // index would log the place in the array for each item
    // this will repeat once for each object in array
    // function will be valled for each object in the array so added the word 'bird' to the function
    // passed bird as an argument as an object for the array
    console.log(bird.toUpperCase())
    // prints each bird on a new line
    // OWL
    // ROBIN
    // EAGLE

    //console.log(index, bird.toUpperCase())
    //would print
    // 0 OWL
    // 1 ROBIN
    // 2 EAGLE
})

// same logic different for loop
// start at zero and loop and print each bird as many times as there are items in the array (birds.length)
// add one to x for the next loop to print the following item in the array
for (let x = 0; x < birds.length; x++) {
    let specificBird = birds[x]
    console.log(specificBird.toUpperCase())
    // same output as above

    // console.log(x, specificBird.toUpperCase())
    // would give us the 0 OWL, 1 ROBIN, etc as shown above
}

/* A WHILE LOOP
Not common but hould know how to do them.
Here is a while loop to double a number and display it
Stop when a number greater than 100 is reached */
let maxVal = 100
let startNumber = 1
while (startNumber < maxVal) {
    startNumber *= 2 //multiplies and then sets itself
    console.log('number = ' + startNumber)
}




