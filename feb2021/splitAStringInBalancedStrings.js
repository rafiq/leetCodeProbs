/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let counter = 0;
    let balancedCounter = 0;

    for (let char of s) {
        let firstChar = s[0];
        if (char === firstChar) {
            counter++;
        } else {
            counter--;
        }
        if (counter === 0 ) {
            balancedCounter++;
            counter = 0;
        }
    }
    return balancedCounter;
};
console.log(
balancedStringSplit("RLRRLLRLRL"), //4
balancedStringSplit("RLLLLRRRLR"),//3
balancedStringSplit("LLLLRRRR"),//1
)
// 1221. Split a String in Balanced Strings
// Easy

// 909

// 555

// Add to List

// Share
// Balanced strings are those that have an equal quantity of 'L' and 'R' characters.

// Given a balanced string s, split it in the maximum amount of balanced strings.

// Return the maximum amount of split balanced strings.

// Here below is a solution attempt trying to make a stack but it doesn't work because when popping more than the number of firstChar, then it will keep incrementing.
// let stack = [];
// let numOfBalancedStrings = 0;
// let sArray = s.split("");
// for (let char of sArray) {
//     let firstChar = sArray[0];
//     if (char === firstChar) {
//         stack.push(char)
//     }
//     stack.pop(char)
//     if (stack.length === 0) {
//         numOfBalancedStrings++;
//     }
// }