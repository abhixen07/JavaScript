// Simple Comparision
// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

//Prefer to have same datatypres for comparision
// console.log("2" > 1);
// console.log("2" > 8);
// console.log("02" > 1);

// Comparision and equality check are two different things
//Avoid these comparision
//Prefer Clean Code
// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);


// null > 0 → false
// When using relational operators (<, >, <=, >=), JavaScript converts null to a number. null becomes 0.
// So it becomes: 0 > 0, which is false.

// null == 0 → false
// Here, null is not converted to a number. == only returns true if both operands are the same value or if a special coercion rule applies.
// But null is only loosely equal to undefined, not to 0.
// So: null == 0 → false.

// null >= 0 → true
// This is the surprising one!
// JavaScript converts null to 0, so this becomes: 0 >= 0, which is true.


// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0);
console.log(undefined == null);

// === is strict converaion w.r.t datatypes

console.log("2" == 2); //No Strict ==
console.log("2" === 2); //Strict ===