// create an object - contains properties
// properties are name: value pairs
// use {} to define an object
let user = {username: 'Zoe', password: 'kittens'}

// these provide the same results - we'd want to use the [] is there's a set variable
console.log(user.username)
console.log(user['username'])

let whatPassword = 'password'
console.log(user[whatPassword]) //kittens

//JSON - JavaScript Object Notation
//Dictionary-like structure
// {name : value , name2: value2}
// names must be strings but values can be anything

// CHANGE A VALUE
user.password = 'swamp'
console.log(user) //{ username: 'Zoe', password: 'swamp' }

//or with braacket method:
user['password'] = 'bog'
console.log(user) // { username: 'Zoe', password: 'bog' }

// it's easy to add a new pairing:
user.email = 'zoe123@gmail.com'
console.log(user) //{ username: 'Zoe', password: 'bog', email: 'zoe123@gmail.com' }    
console.log(user.email) //zoe123@gmail.com


