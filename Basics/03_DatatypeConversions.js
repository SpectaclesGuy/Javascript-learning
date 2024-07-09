let score = "33"
let score2 = "33qwerty"
console.log(typeof(score))
console.log(typeof(score2))

// To use a datatype for conversion, the name of the datatype should start with a capital alphabet.
let scoreInNum = Number(score)
console.log(typeof(scoreInNum))
console.log(scoreInNum)

let scoreInNum2 = Number(score2)
console.log(typeof(scoreInNum2))
console.log(scoreInNum2)
// Here score2 is originially a string but we converted it to a number but 33qwerty does not have a numeric value
// so it is assigned as NaN which means not a number.

// Sometimes it will occur that a value that should not be converted into a number is converted into a number
// as javascript is not a strict language, in such case we need to check for NaN.

// While type converting null into Number we get 0
// While type converting undefined into Number we get NaN
// Boolean value is converted either into 1 or 0 depending on true or false.

let isLoggedIn = 1
let boolIsLoggedIn = Boolean(isLoggedIn)
console.log(boolIsLoggedIn)

let emptyString = ""
let nonEmptyString = "Hello"
let boolEmptyString = Boolean(emptyString)
let boolNonEmptyString = Boolean(nonEmptyString)
console.log(boolEmptyString)
console.log(boolNonEmptyString)

// Empty string is converted into false when converted into boolean
// Non empty string is converted into true when converted into boolean
console.log();


// ***********************************OPERATIONS********************************************
let val = 123
let negValue = -val
console.log(negValue);

console.log(2+2);
console.log(2-3);
console.log(2*2);
console.log(2**4); // 2 raised to the power 4
console.log(2/4); // divison which returns float point value
console.log(15%4); // returns remainder
console.log();


// strings can only be added not subtracted
let str1 = "Hello"
let str2 = " World"
let str3 = str1 + str2
console.log(str3);
console.log();

// if the string component is at start, then the whole thing will be concatenated like a string
// if the string component is at last, then all other operations would be done first and then concatenated with string
console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

// postfix and prefix increment
let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"