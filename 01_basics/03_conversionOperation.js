let score = "33" // 33
// let score = "abc" // Nan
// let score = undefined //undefined
// let score = null //0

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

// let isLoggedIn = 1 //true
let isLoggedIn = "anab" //true
// let isLoggedIn = "" //false

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);


// *********************** Operations ***********************

let value = 3
let negValue = -value
//negative value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " anab"

let str3 = str1 + str2
// console.log(str3);

//which come first that will be prefered 
//conversion number in this case string
// console.log("1" + 2); // 12
// console.log(1 + "2"); // 12
// console.log("1" + 2 + 2); //in this case 122
// console.log(1 + 2 + "2"); //in this case number //32

// not write non readable code
// console.log( (3 + 4) * 5 % 3);

// console.log(+true); //1
// console.log(+""); //0

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
g = ++gameCounter;
// console.log(gameCounter);
console.log(g);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion