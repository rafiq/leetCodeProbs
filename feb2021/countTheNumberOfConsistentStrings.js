/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    let charsAllowed = new Set(allowed)
    let count = 0;

    for (let word of words) {
        count += isValid(word, charsAllowed);
    }
    return count;
    function isValid(string) {
        for (let char of string) {
            if (!charsAllowed.has(char)) {
                return false;
            }
        }
        return true;
    }
};
console.log(
    countConsistentStrings("ab",["ad","bd","aaab","baa","badab"]), //2
    countConsistentStrings("abc",["a","b","c","ab","ac","bc","abc"]), //7
    countConsistentStrings("cad",["cc","acd","b","ba","bac","bad","ac","d"]),//4

)
// My solution below kept returning one for each test case, and I think it is due to the char set that I am checking. It may need to be split up or something done to it, to make it check for each letter with each letter in the array.
// var countConsistentStrings = function(allowed, words) {
//     let chars = allowed.split("");
//     let count = [];

//     for (let word of words) {
//         if (word.split("").includes(!chars)) {
//             continue;
//         }
//         return count.push(word);
//     }

//     return count.length;
// };
// console.log(
//     countConsistentStrings("ab",["ad","bd","aaab","baa","badab"]), //2
//     countConsistentStrings("abc",["a","b","c","ab","ac","bc","abc"]), //7
//     countConsistentStrings("cad",["cc","acd","b","ba","bac","bad","ac","d"]),//4

// )
// 1684. Count the Number of Consistent Strings
// You are given a string allowed consisting of distinct characters and an array of strings words. A string is consistent if all characters in the string appear in the string allowed.

// Return the number of consistent strings in the array words.