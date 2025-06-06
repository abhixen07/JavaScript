//  Primitive
//these are call by value,when you copy
//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

//JavaScript is a dynamically typed language. Because data type will 
//automatically assigned at the time of compilation or code execution.

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null //object
let userEmail;

//each call to Symbol()
//creates a completely new and unique symbol.

// Symbol('123') !== Symbol('123')

// They are different identities in memory,
// even if the descriptions are the same.

const sharedId1 = Symbol.for('shared')
const sharedId2 = Symbol.for('shared')
    
console.log(sharedId1 === sharedId2); // true



const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); //false

// const bigNumber = 3456543576654356754n



// Call by Reference (Non primitive)

// Array, Objects, Functions

const heros = ["a", "b", "c"];
let myObj = {
    name: "anab",
    age: 22,
}

//function expression
//type is object function
const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof isLoggedIn);

// Primitive datatypes:
// String - string
// Number - number
// Boolean - boolean
// Null - object(****)
// Undefined - undefined
// BigInt - bigint

// Non-primitive datatypes:
// Array - object
// Function - function(object)
// Object - object


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack(Premitive), Heap (Non-Primitive)
//Copy bn jati in Stack when change in variable other change nhi hote a original 
// but in Heap full data change one place all data bcz reference same
let myYoutubeName = "anab"
let anotherName = myYoutubeName

console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
    email:"user@gmail.com",
    password:"123456"
}

let userTwo = userOne

userTwo.email = "user2@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);