const score = 400
// console.log(score);        //400

//as object prototype
const balance = new Number(100)
// console.log(balance);       //[Number: 100]

//Difference in types of both
//In Object

// Why it's not recommended:
// It creates unnecessary objects, which are heavier than primitives.
// It causes confusing behavior — e.g., new Number(0) is truthy, but 0 is falsy!

let balance0 = new Number(0);

if (balance0) {
//   console.log("✅ It runs!");
} else {
//   console.log("❌ It doesn't run!");
}

const balance1 = new Number(100);
// console.log(balance1); // [Number: 100]
// console.log(typeof balance1); // "object"

const balance2 = Number(100);
// console.log(balance2); // 100
// console.log(typeof balance2); // "number"



//now it is string and have now more
//additional properies bcz of string 
// console.log(balance.toString());    //100
// console.log(balance.toString().length);    //3
// console.log(balance.toFixed(2));    //100.00 //for ecommerce application

//For Precision
const  otherNumber = 123.8966
// console.log(otherNumber.toPrecision(4));    //123.9

//Locale String
const  hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));    //10,00,000

// +++++++++++++++++ Maths +++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4,3,6,8));
// console.log(Math.max(4,3,6,8));

//Random Values in Decimal
console.log(Math.random());
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)



