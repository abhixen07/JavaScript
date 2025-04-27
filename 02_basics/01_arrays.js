// array

const myArr = [0, 1, 2, 3, 2, 4, 5]
const myHeros = ["spiderman", "superman"]

//object
const myArr2 = new Array(1, 8, 3, 4)
// console.log(myArr[2]); //prints 2

// Array methods

//push and pop items
// myArr.push(6)
// myArr.push(7)
// myArr.pop()

//add value at start but it will make load on pc
// myArr.unshift(9)

//remove value from start but it will make load on pc
// myArr.shift()


// console.log(myArr.includes(9)); //see variable is avaiable in array or not
// console.log(myArr.indexOf(3)); // see index of variable

// string convert   
// const newArr = myArr.join()

// console.log(myArr); //array
// console.log( newArr); //string


// slice, splice

console.log("A ", myArr); // [0, 1, 2, 3, 4, 5] → Original array

//slice(start, end)
const myn1 = myArr.slice(1, 3); // from index 1 to 2 (3 is not included)
console.log(myn1); // [1, 2]
console.log("B ",myArr); // [0, 1, 2, 3, 4, 5] → Original array remains unchanged


const myn2 = myArr.splice(1, 3); // remove 3 elements starting from index 1
console.log(myn2); // [1, 2, 3] → The removed elements
console.log("C ",myArr); // [0, 4, 5] → Original array is now changed!

// splice(startIndex, deleteCount)
const sarray = [2,3,4,5,6,8,9,2,4,5]
console.log("Before Splice", sarray);
const myn3 = sarray.splice(3,3);
console.log("Splice Array", myn3);
console.log("After Splice", sarray);