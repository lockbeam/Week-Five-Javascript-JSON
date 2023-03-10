/* Lab: write the code requested by lines marked //TODO
You should NOT modify any of the code that's here already. Add the code requested.   */

console.log('For this lab, please write the code requested at the //TODO markers.')

/* a. Use this JavaScript object. This represents the current position of the International Space Station
at 1pm on January 12th 2018, fetched from http://api.open-notify.org/iss-now.json.
 */

let iss_location = {
  "timestamp": 1515784140,
  "iss_position":
    {
      "latitude": "49.2167",
      "longitude": "100.5363"
    },
  "message": "success"
}

// TODO Extract the latitude value, and log it to the console.
let issLocation = iss_location.iss_position
console.log(issLocation) // { latitude: '49.2167', longitude: '100.5363' }
let latitude = issLocation.latitude
console.log(latitude)

// TODO Extract the longitude value, and log it to the console.
let longitude = issLocation.longitude
console.log(longitude)



/* b. Use this JavaScript object of exchange rates relative to Euros.
The properties are currency symbols, the values are the exchange rates.
Data source: http://fixer.io/
* */


let rates = {
    "AUD": 1.5417,
    "BGN": 1.9558,
    "BRL": 3.8959,
    "CAD": 1.5194
}

// TODO write code to add a new property for Swiss Francs. Symbol is CHF, value is 1.1787.
rates.CHF = 1.1787
console.log(rates)

// TODO if you had 100 Euros, write code to get the exchange rate from the object, then calculate 
//      the equivalent value in Australian Dollars (AUD)

let eurosIHave = 100
let euroToAud = rates.AUD
let totalAud = euroToAud * eurosIHave
let audRounded = totalAud.toFixed(2)
console.log(euroToAud)
console.log(`If I had ${eurosIHave} euros I would have ${audRounded} AUD`)
// TODO write code to identify the currency symbol that has the highest exchange rate compared to Euros.
//    In other words, identify the property with the largest value. the answer is BRL (Brazilian Real) at 3.8959 BRL to 1 Euro.

let countryName = Object.keys(rates) // seperating keys from values but position should remain the same
let countryRates = Object.values(rates)

console.log(countryRates) // worked : )

let i = countryRates.indexOf(Math.max(...countryRates)) // found this online after a lot of trial and error, gave me max value
console.log(i) //position 2 is where the highest rate is
countryWithHighestRate = countryName[i] // finding matching pair in the keys
highestRate = countryRates[i] // setting value for template string

console.log(`The currency with the highest exchange rate is ${countryWithHighestRate} with a rate of ${highestRate} to one Euro`)

//I CAN'T BELIEVE I DID THIS - SO HAPPY WITH MYSELF : )

// BRAINSTORMING: pull data seperately and then either identify location of max in values and then print corresponding figure in keys?

//HAD SOME OF MY OWN IDEAS THAT DIDN'T WORK AND SOME INTERNET SEARCHES AS WELL - GRAVEYARD

// console.log(
//   Math.max(...Object.keys(rates))
// )

//ratesArray = rates
//let highestRate = max(ratesArray)
//console.log(highestRate)

// let countryAndRates = []
// let ratesArray = rates
// ratesArray.forEach( function (thing){
//   countryAndRates.push(thing)
// })

// console.log(countryAndRates)

/* c. Use this JavaScript array of objects of cat owners, and their cats. Source, moderncat.com
 */

let cats_and_owners = [
  { name: "Bill Clinton", cat: "Socks" },
  { name: "Gary Oldman", cat: "Soymilk" },
  { name: "Katy Perry", cat: "Kitty Purry" },
  { name: "Snoop Dogg", cat: "Miles Davis" }
]

// TODO print Gary Oldman's cat's name

allAboutGary = cats_and_owners[1]
console.log(allAboutGary) //{ name: 'Gary Oldman', cat: 'Soymilk' }
soymilk = allAboutGary.cat
console.log(soymilk) // Soymilk

// TODO Taylor Swift's cat is called 'Meredith'. Write code to add this data to the array.

cats_and_owners.push({name: "Taylor Swift", cat: "Meredith"}) //brackets important here!!
console.log(cats_and_owners)

// TODO write a loop to print each cat owner, and their cat's name, one per line. Use the forEach style.
//   Each line should have a message like "Snoop Dogg's cat is called Miles Davis"

// !!!! forEach() is a method on JavaScript arrays, not objects !!!!

descriptions = []

cats_and_owners.forEach( function( nameandcat) {
    console.log(`${nameandcat.name}'s cat is called ${nameandcat.cat}` )
})

// OMG I MADE THIS SO MUCH HARDER THAN IT NEEDED TO BE
// ANOTHER GRAVEYARD BELOW

// Object.keys(cats_and_owners).forEach(function(key){
//   console.log(key + ' - ' + cats_and_owners[key])
// })

// let descriptionsString = descriptions.join("'s cat is called ")
// console.log(descriptions)
// console.log(descriptionsString)

/* d. Use the following JSON object, describing the Nobel Prize winners in 2017.
Source http://api.nobelprize.org/v1/prize.json?year=2017
* */




let nobel_prize_winners_2017 = {
  "prizes":[
    {
      "year":"2017",
      "category":"physics",
      "laureates":[
        {
          "id":"941",
          "firstname":"Rainer",
          "surname":"Weiss",
          "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
          "share":"2"
        },
        {
          "id":"942",
          "firstname":"Barry C.",
          "surname":"Barish",
          "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
          "share":"4"
        },
        {
          "id":"943",
          "firstname":"Kip S.",
          "surname":"Thorne",
          "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
          "share":"4"
        }
      ]
    },
    {
      "year":"2017",
      "category":"chemistry",
      "laureates":[
        {
          "id":"944",
          "firstname":"Jacques",
          "surname":"Dubochet",
          "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
          "share":"3"
        },
        {
          "id":"945",
          "firstname":"Joachim",
          "surname":"Frank",
          "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
          "share":"3"
        },
        {
          "id":"946",
          "firstname":"Richard",
          "surname":"Henderson",
          "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
          "share":"3"
        }
      ]
    },
    {
      "year":"2017",
      "category":"medicine",
      "laureates":[
        {
          "id":"938",
          "firstname":"Jeffrey C.",
          "surname":"Hall",
          "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
          "share":"3"
        },
        {
          "id":"939",
          "firstname":"Michael",
          "surname":"Rosbash",
          "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
          "share":"3"
        },
        {
          "id":"940",
          "firstname":"Michael W.",
          "surname":"Young",
          "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
          "share":"3"
        }
      ]
    },
    {
      "year":"2017",
      "category":"literature",
      "laureates":[
        {
          "id":"947",
          "firstname":"Kazuo",
          "surname":"Ishiguro",
          "motivation":"\"who, in novels of great emotional force, has uncovered the abyss beneath our illusory sense of connection with the world\"",
          "share":"1"
        }
      ]
    },
    {
      "year":"2017",
      "category":"peace",
      "laureates":[
        {
          "id":"948",
          "firstname":"International Campaign to Abolish Nuclear Weapons (ICAN)",
          "motivation":"\"for its work to draw attention to the catastrophic humanitarian consequences of any use of nuclear weapons and for its ground-breaking efforts to achieve a treaty-based prohibition of such weapons\"",
          "share":"1",
          "surname":""
        }
      ]
    },
    {
      "year":"2017",
      "category":"economics",
      "laureates":[
        {
          "id":"949",
          "firstname":"Richard H.",
          "surname":"Thaler",
          "motivation":"\"for his contributions to behavioural economics\"",
          "share":"1"
        }
      ]
    }
  ]
}

// TODO print the full name of the Literature Nobel laureate.

let prizes = nobel_prize_winners_2017.prizes
let literature = prizes[3]
let arrayLitLaureateInfo = literature.laureates
let litLaureateInfo = arrayLitLaureateInfo[0]
let litFirstName = litLaureateInfo.firstname
let litSurname = litLaureateInfo.surname

// console.log(litLaureateInfo)
// console.log(litFirstName)
// console.log(litSurname)

console.log(litFirstName + ' ' + litSurname)

// TODO print the ids of each of the Physics Nobel laureates. Your code should still work without modification if a laureate was added, or removed.

let physics = prizes[0]
let arrayPhysicsLaureateInfo = physics.laureates

arrayPhysicsLaureateInfo.forEach( function( idNumber){
  console.log(idNumber.id)
})

console.log(arrayPhysicsLaureateInfo)

// TODO write code to print the names of all of the prize categories (So your output would start physics, chemistry, medicine... ).

prizes.forEach( function( prizeCategory) {
  console.log(prizeCategory.category)
})

// TODO write code to print the total number of prize categories

allThePrizes = []

prizes.forEach( function( prizeCategory) {
  allThePrizes.push(prizeCategory.category)
})

numberOfPrizes = allThePrizes.length
console.log('There are a total of ' +numberOfPrizes + ' prize categories')

// TODO write code to count the total number of laureates from 2017. 
//   have a good look at how the JSON is structured, and think about what loop(s) you'll need to write.