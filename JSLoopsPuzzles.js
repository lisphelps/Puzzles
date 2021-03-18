/* LOOPS */
/* Given an array of integers, calculate the sum of all the integers. 
For duplicates, only count them once. 
([1, 2, 3] → 6, [3, 4, 3, 4, 5] → 12, [1, 1, 0, 0] → 1) */
const array1 = [1,2,3];
const array2 = [3,4,3,4,5];
const array3 = [1,1,0,0];

function arraySum(array) {
    let uniqueChars = [... new Set(array)]
    let sum = 0;
    for (let n of uniqueChars) {
        sum += n;
    } return sum;
}

console.log(arraySum(array1)); //6
console.log(arraySum(array2)); //12
console.log(arraySum(array3)); //1

/* Given an array of strings, return a map with a key for each different string, 
with the value the number of times that string appears in the array.
(["a", "b", "a", "c", "b"] → {"a": 2, "b": 2, "c": 1}, 
 ["c", "b", "a"] → {"a": 1, "b": 1, "c": 1}, 
["c", "c", "c", "c"] → {"c": 4}) */

const array4 = ["a", "b", "a", "c", "b"];
const array5 = ["c", "b", "a"];
const array6 = ["c", "c", "c", "c"];

const count = {};

array4.forEach(function(i) {count[i] = (count[i]||0) + 1;})
console.log(count);

/* Given an array of ints, return true if one of the first 4 elements in the array is a 9. 
The array length may be less than 4. 
([1, 2, 9, 3, 4] → true, [1, 2, 3, 4, 9] → false, [1, 2, 3, 4, 5] → false, [] → false) */

array7 = [1, 2, 9, 3, 4];
array8 = [1, 2, 3, 4, 9];
array9 = [1, 2, 3, 4, 5];
array10 = [];

function nineCheck(array) {
 for (i =0; i <= 3; i++) {
     if (array[i] === 9) 
     return true;
    }
return false;
}

console.log(nineCheck(array7));
console.log(nineCheck(array8));
console.log(nineCheck(array9));
console.log(nineCheck(array10));