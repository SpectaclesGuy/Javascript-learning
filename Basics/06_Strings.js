// String Interpolation -> creates a placeholder for objects/variables where we can place variables or values

const name = "abc"
const value = 50

// `` is the key above tab
console.log(`Hello my name is ${name} and the value is ${value}`);

// Another way to declare a string, by this method we can use the methods of JS on the string, here string is an object
let gameName = new String('cricket')
console.log(gameName[0]);

// To access the prototype
console.log(gameName.__proto__);

// Accessing various methods available to us
console.log(gameName.length);

// By using methods here, the original value remains unchanged
console.log(gameName.toUpperCase());
console.log(typeof(gameName));
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

// Here, 1 is included but 3 is not
const newString = gameName.substring(1,3)
console.log(newString);

const anotherString = gameName.slice(-4,6)
console.log(anotherString);
// .slice(start,end) makes a new substring or subarray from a given string or array without changing the original value
// it can take negative values
// the negative value is treated as [array.length() + start]

// To remove spaces we use trim method
const someString = "           hello           "
console.log(someString);
console.log(someString.trim());
// Works only on whitespaces

// If there is a need to change some value in a string, use replace method
// Original value is not changed here
const url = "https://abc.com/abc%20xyz"
console.log(url);
console.log(url.replace('%20','-'));
// string.replace(what_to_replace, replace_by_what)

// To ask whether a string contains a particular substring or not
console.log(gameName.includes('ket')); // true

// split function -> it splits a given string into an array on the basis of a separator (Ex- whitespaces, dashes) and a limiter
const theString = "My name is xyz"
// Here the separator we provided is whitespace
console.log(theString.split(" "))
// string.split(separator, limit)
// limit (Optional)
// A non-negative integer specifying a limit on the number of substrings to be included in the array. 
// If provided, splits the string at each occurrence of the specified separator, but stops when 
// limit entries have been placed in the array. Any leftover text is not included in the array at all.