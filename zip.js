function isMinnesotaZip(code) {
    //All MN zips are between 55001 and 56763
    if (code >= 55001 && code <=56763) {
        return true
    } else {
        return false
    }
}

console.log(isMinnesotaZip(55483)) //testing to see if 55483 is a MN zip code
// used number above but can also use a string
console.log(isMinnesotaZip(55001))
console.log(isMinnesotaZip(56763))
console.log(isMinnesotaZip(55000))
console.log(isMinnesotaZip(56764))

// GPA
function isGPA(gpa) {
    if (gpa >= 0 && gpa <= 4) {
        return true
    } else {
        return false
    }
}

// another way of wrtiting the function above:
// function isGPA(gpa) {
//      return gpa >= 0 && gpa <= 4 
// }

console.log(isGPA(0.1))
console.log(isGPA(4.1))
console.log(isGPA(-0.1))
console.log(isGPA(3.9999999))

// CITY AND STATE
function cityState(city, state) {
    let address = city + ', ' + state.toUpperCase()
    // could also do a template string which uses the backtick `
    // let address = `${city}, ${state.toUpperCase()}`
    return address 
}

console.log(cityState('Minneapolis', ' mn'))
let address = cityState('Seattle', 'wa')
console.log(address)

// PRACTICE WITH TEMPLATE STRINGS
let className = 'Web Programming'
let classCode = 2568
let department = 'ITEC'

console.log(`This class is ${department}${classCode} also known as ${className}. `)