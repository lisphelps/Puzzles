/* We have a loud talking parrot. 
The "hour" parameter is the current hour time in the range 0..23. 
We are in trouble if the parrot is talking and the hour is before 7 or after 20. 
Return true if we are in trouble. 
([true, 6] → true, [true, 7] → false, [false, 6] → false) */

// Aaron's Feedback
const loudBird = (hour) => hour < 7 || hour > 20;

// console.log(loudBird(6)) // true
// console.log(loudBird(7)) // false
// console.log(loudBird(6)) // falseee??

// First try
function loudBirb(hour) {
    return hour < 7 || hour > 20;
  }
  
//  loudBirb(9);



/* Given two int values, return their sum. 
Unless the two values are the same, then return double their sum. 
([1, 2] → 3, [3, 2] → 5, [2, 2] → 8) */

//Aaron's Feedback
const compare = (num1, num2) => {
    const sum = num1 + num2
  
    return num1 === num2 ? sum * 2 : sum 
  }
  
//  console.log(compare(1,2));
//  console.log(compare(3,2));
//  console.log(compare(2,2));
//  console.log(compare(6,6));
  
// First try
  function intCompare (int1, int2) {
      if (int1 !== int2) {
          return int1 + int2;
      }
      return (int1 + int2)*2;
  }
  
//  console.log(intCompare(1,2));
//  console.log(intCompare(3,2));
//  console.log(intCompare(2,2));
//  console.log(intCompare(6,6));
  

/* We are having a party with amounts of tea and candy. 
Return the int outcome of the party encoded as 0=bad, 1=good, or 2=great. 
A party is good (1) if both tea and candy are at least 5. 
However, if either tea or candy is at least double the amount of the other one, the party is great (2). 
However, in all cases, if either tea or candy is less than 5, the party is always bad (0). 
([6, 8] → 1, [3, 8] → 0,[20, 6] → 2) */

// Aaron's Feedback
const partyTime = (tea, candy) => {
    if (tea < 5 || candy < 5) {
      return 0
    }
  
    if (tea / 2 >= candy || candy / 2 >= tea) {
      return 2
    }
  
    return 1
  }
  
  // console.log('partyTime')
  // console.log(partyTime(6, 8)) // 1
  // console.log(partyTime(3, 8)) // 0
  // console.log(partyTime(20, 6)) // 2
  
  // First Try
  function thisPartyTho(tea, candy) {
      if (tea < 5 || candy < 5) {
          return 0;
      } else if (tea >= 2*candy || candy >= 2*tea) {
          return 2;
      } else if (tea >= 5 && candy >= 5) {
          return 1;
      } else 
      return "This party is weird.";
  }
  
  // console.log(thisPartyTho(5,5))
  // console.log(thisPartyTho(6, 8)) // 1
  // console.log(thisPartyTho(3, 8)) // 0
  // console.log(thisPartyTho(20, 6)) // 2


/* PUZZLE: Given a string name, e.g. "Bob", 
return a greeting of the form "Hello Bob!". 
("Bob" → "Hello Bob!", "Alice" → "Hello Alice!","X" → "Hello X!") */

// Aaron's Feedback
const greetings2 = (name) => `Hello ${name}!`

// First try
function greetings(name) {
console.log("Hello " + name + "!");
}

// greetings("Alice");


/* PUZZLE: Given a string of even length, return the first half. 
("WooHoo" → "Woo", "HelloThere" → "Hello", "abcdef" → "abc") */

// Aaron's Feedback
const firstHalf2 = (string) => string.substring(0, string.length / 2)
console.log(firstHalf2('WooHoo'))

// First Try
const firstHalf = (str) => {
    return str.substr(0,str.length/2);
}

// console.log(firstHalf("WooHoo")); //Woo
// console.log(firstHalf("HelloThere")); //Hello
// console.log(firstHalf("abcdef")); //abc


/* PUZZLE: Given an integer, return the integer multiplied by 2. 
(2 → 4, 3 → 6, 5 → 10) */

// Aaron's Feedback
const multiplyBy2 = (number) => number * 2

// First Try
const intMultiply = (int1) => {
    return int1*2;
}
// console.log(intMultiply(2));
// console.log(intMultiply(3));
// console.log(intMultiply(5));


/* PUZZLE: Given a number, find remainder when number is divided by 5. 
(10 → 0, 3 → 3, 17 → 2) */

const intRemainder = (int2) => {
    return int2%5;
}
// console.log(intRemainder(10));
// console.log(intRemainder(3));
// console.log(intRemainder(17));


/* PUZZLE: Given an array of numbers, return the last element. 
([1, 0, 3] → 3, [1, 2, 3, 4, 5] → 5, [] → *null*) */

const array1 = [1, 0, 3];
const array2 = [1, 2, 3, 4, 5];
const array3 = [];

// Aaron's Feedback
console.log('lastEl')
const lastEl = (array) => array.pop() || null;

// console.log(lastEl(array1));
// console.log(lastEl(array2));
// console.log(lastEl(array3));

// First Try
function lastElement(array) {
    return array.pop();
}

// console.log(lastElement(array1));
// console.log(lastElement(array2));
// console.log(lastElement(array3));


/* PUZZLE: Given an array of ints length 3, return a new array 
with the elements in reverse order.
([1, 2, 3] → [3, 2, 1], [5, 11, 9] → [9, 11, 5], [7, 0, 0]) → [0, 0, 7]) */
var arrayOne = [1,2,3];
var arrayTwo = [5,11,9];
var arrayThree = [7,0,0];

function arrayReverse(array){
    return array.reverse() || null;
}

// console.log(arrayReverse(arrayOne));
// console.log(arrayReverse(arrayTwo));
// console.log(arrayReverse(arrayThree));


/* PUZZLE: Get the value of "a". 
({a: 123, b:456} → 123, {"a": "letter", "1": "number"}  →  "letter"}, 
 {b: 456, c: 789} → *null*) */

var hashOne = {a: 123, b: 456};
var hashTwo = {"a" : "letter", "1" : "number"};
var hashThree = {b: 456, c: 789}

console.log('extract');
const extract = (hash) => hash.a || null;

function extractA(hash) {
    if(hash.a !== null) {
        return hash.a
    } else {
        return null;
    }
}

// console.log(extractA(hashOne));
// console.log(extractA(hashTwo));
// console.log(extractA(hashThree));

/* LOOPS */
/* Given an array of integers, calculate the sum of all the integers. 
For duplicates, only count them once. 
([1, 2, 3] → 6, [3, 4, 3, 4, 5] → 12, [1, 1, 0, 0] → 1) */



/* Given an array of strings, return a map with a key for each different string, 
with the value the number of times that string appears in the array.
(["a", "b", "a", "c", "b"] → {"a": 2, "b": 2, "c": 1}, 
 ["c", "b", "a"] → {"a": 1, "b": 1, "c": 1}, 
["c", "c", "c", "c"] → {"c": 4}) */



/* Given an array of ints, return true if one of the first 4 elements in the array is a 9. 
The array length may be less than 4. 
([1, 2, 9, 3, 4] → true, [1, 2, 3, 4, 9] → false, [1, 2, 3, 4, 5] → false, [] → false) */



