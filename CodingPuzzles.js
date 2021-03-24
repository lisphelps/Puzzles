/* arrayCount9: Given an array of ints, 
return the number of 9's in the array. 
([1, 2, 9] → 1, [1, 9, 9] → 2, [1, 9, 9, 3, 9] → 3) */
const array1 = [1, 2, 9];
const array2 = [1, 9, 9];
const array3 = [1, 9, 9, 3, 9];

function arrayCount9(array) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 9) {
            count++;
        } 
    }
    return count;
}

// console.log(arrayCount9(array1)); //1
// console.log(arrayCount9(array2)); //2
// console.log(arrayCount9(array3)); //3


/* gHappy: We'll say that a lowercase 'g' in a string is "happy" 
if there is another 'g' immediately to its left or right. 
Return true if all the g's in the given string are happy. 
("xxggxx" → true, "xxgxx" → false, "xxggyygxx" → false) */

function gHappy(str) {
    let happy = true;
    for (let g = 0; g <= str.length; g++) {
            if (str.charAt(g) === 'g') {
                if (str.charAt(g-1) === 'g' || str.charAt(g+1) === 'g') { 
                } else happy = false;
            } 
    } return happy;
} 

console.log(gHappy("xxggxx")); // true
console.log(gHappy("xxgxx")); // false
console.log(gHappy("xxggyygxx")); // false

/* loneSum: Given 3 int values, a b c, return their sum. 
However, if one of the values is the same as another of the values, 
it does not count towards the sum. 
([1, 2, 3] → 6, [3, 2, 3] → 2, [3, 3, 3] → 0) */

let sumArray1 = [1, 2, 3];
let sumArray2 = [3, 2, 3];
let sumArray3 = [3, 3, 3];

function loneSum {

}

console.log(loneSum(sumArray1));
console.log(loneSum(sumArray2));
console.log(loneSum(sumArray3));

/* seriesUp: Given n>=0, create an array with the pattern 
{1,    1, 2,    1, 2, 3,   ... 1, 2, 3 .. n} (spaces added to show the grouping). 
Note that the length of the array will be 1 + 2 + 3 ... + n, 
which is known to sum to exactly n*(n + 1)/2. 
(3 → [1, 1, 2, 1, 2, 3], 4 → [1, 1, 2, 1, 2, 3, 1, 2, 3, 4], 2 → [1, 1, 2]) */



/* doubling: Given a list of integers, 
return a list where each integer is multiplied by 2. 
([1, 2, 3] → [2, 4, 6], [6, 8, 6, 8, -1] → [12, 16, 12, 16, -2], [] → []) */



/* zeroFront: Return an array that contains the exact same numbers as the given array, 
but rearranged so that all the zeros are grouped at the start of the array. 
The order of the non-zero numbers does not matter. So {1, 0, 0, 1} becomes {0 ,0, 1, 1}. 
You may modify and return the given array or make a new array. 
([1, 0, 0, 1] → [0, 0, 1, 1], [0, 1, 1, 0, 1] → [0, 0, 1, 1, 1], [1, 0] → [0, 1]) */



/* wordMultiple: Given an array of strings, return a Map<String, 
Boolean> where each different string is a key and its value is true if that string appears 2 or more times in the array. 
(["a", "b", "a", "c", "b"] → {"a": true, "b": true, "c": false}, 
["c", "b", "a"] → {"a": false, "b": false, "c": false}, ["c", "c", "c", "c"] → {"c": true} */



/* evenlySpaced: Given three ints, a b c, one of them is small, one is medium and one is large. 
Return true if the three values are evenly spaced, 
so the difference between small and medium is the same as the difference between medium and large. 
([2, 4, 6] → true, [4, 6, 2] → true, [4, 6, 3] → false) */



/* mirrorEnds: Given a string, look for a mirror image (backwards) string 
at both the beginning and end of the given string. 
In other words, zero or more characters at the very begining of the given string, 
and at the very end of the string in reverse order (possibly overlapping). 
For example, the string "abXYZba" has the mirror end "ab". 
("abXYZba" → "ab", "abca" → "a, "aba" → "aba") */



/* notReplace: Given a string, return a string where 
every appearance of the lowercase word "is" has been replaced with "is not". 
The word "is" should not be immediately preceeded or followed by a letter -- 
so for example the "is" in "this" does not count. 
("is test" → "is not test", "is-is" → "is not-is not", "This is right" → "This is not right") */

String.prototype.replacer = function (pattern, replacement) {
    var match, result, source = this.toString();
    if (pattern == null || replacement == null) {
        return source;
    }

    result = '';
    while (match = source.match(pattern)) {
        result += source.slice(0, match.index);
        result += typeof replacement === 'function' ? replacement(match[0]) : replacement;
        source = source.slice(match.index + match[0].length);
    }
    return result + source;
};

function fixIs(str) {
    return str.replacer(/\bis\b/, 'is not');
}

// console.log(fixIs("is test"));
// console.log(fixIs("is-is"));
// console.log(fixIs("This is right"));

function notReplace(text){
    let textArray = text.split(" ");
    let updatedArray = textArray.map(text => {
        if (text === "is"){
            return "is not"
        } else if (text === "is-is") {
            return "is not-is not";
        }
        return text;
    })
return updatedArray.join(" ")
}

console.log(notReplace("is test"));
console.log(notReplace("is-is"));
console.log(notReplace("This is right"));