console.log('Hello World!')

// There are three way to create variables
let color = 'blue' //choice for variable
var size = 'medium' //var is not recommended because var exists in a lot more places than one would think
const language = 'JavaScript'  // can't change this value - it's set

// NUMBER TYPES - all the same no difference for floats
let quantity = 5
let distance = 4.5

// STRINGS - you can use single or double quotes but be consistant
let text = "Hello World"
let message = 'Howdy people'


// Unlike Python can join together strings and ints
console.log('There are ' + quantity + ' people')

let todayTemp = 75

// testing
console.log("Today's temperature is " + todayTemp + " degrees F")

// math works as expected
let tempC = (todayTemp - 32) * 5 / 9
console.log("Today's temp is " + tempC.toFixed(2) + " degrees C")
//.toFixed() rounds to the hundredths place

// REVIEW CREATING AND CALLING FUNCTIONS
// use the word function to define a funciton
// name shout
// parameter = text
// function will create a new piece of text
// text parament will uppercase it and add excalamtions

function shout(text) {
    let shouty_text = text.toUpperCase() + '!!!'
    return shouty_text
}

console.log(shout('hello world'))
//can also be done on variables:
let message2 = shout('hello wed programmers')
console.log(message2)

function f_to_c(f, decimalPlaces) {
    let celsius = (f - 32) * 5 / 9
    if (decimalPlaces) { //if left undefined these values are considered false AKA falsey values
        return celsius.toFixed(decimalPlaces)
    } else {
    return celsius
    }
}

///todayTemp set earleir
todayCelsius = f_to_c(todayTemp, 4) //four decimal places
console.log(todayCelsius)





