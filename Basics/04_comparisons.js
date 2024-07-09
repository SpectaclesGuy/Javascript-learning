// In javascript it is allowed to compare values from different datatypes,but it is preferred that we compare
// values after comparing them to same datatype

console.log("2" > 1);       // returns true
console.log("02" > 1);      // returns true
console.log();

// Interesting Comparisons
console.log(null > 0);      // returns false
console.log(null == 0);     // returns false
console.log(null >= 0);     // returns true
console.log();
// equality check == and comparisons >, <, >=, <= works differently
// comparisons converts null into zero that is why (1) is false but (3) is true
// same problem occurs with undefined

console.log(undefined > 0);      // returns false
console.log(undefined == 0);     // returns false
console.log(undefined >= 0);     // returns true
console.log();

// strict check -> ===
// strict check, checks value and the type of datatype
console.log("2" == 2);      // returns true
console.log("2" === 2);     // returns false