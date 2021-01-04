// Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.

// A string is represented by an array if the array elements concatenated in order forms the string.

var arrayStringsAreEqual = function(word1, word2) {
let word1InLower = word1.join("");
let word2InLower = word2.join("");

let newString1 = word1InLower.toLowerCase();
let newString2 = word2InLower.toLowerCase();

if (newString1 === newString2) {
  return true;
} else {
  return false;
}

};

console.log(arrayStringsAreEqual(["ab", "c"], ["a", "bc"]));

// Faster Answer
// var arrayStringsAreEqual = function(word1, word2) {
  // return word1.reduce((s, t) => s + t) === word2.reduce((s, t) => s + t);
// };