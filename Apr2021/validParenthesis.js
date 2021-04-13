/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") stack.push(")");
        else if (s[i] === "[") stack.push("]");
        else if (s[i] === "{") stack.push("}");
        else if (s[i] !== stack.pop()) return false;
    }
    return !stack.length;
};
console.log(
    isValid("()[]{}"),//true;
    isValid("([)]"),//false;
)

// var isValid = function (inputString) {
    // While the string contains a pair of brackets
//     while (
//         inputString.indexOf('()') !== -1 ||
//         inputString.indexOf('{}') !== -1 ||
//         inputString.indexOf('[]') !== -1
//     ) {
//         // Remove any occurrences of whole brackets
//         inputString = inputString
//             .replace('()', '')
//             .replace('{}', '')
//             .replace('[]', '');
//     }

//     // Return based on whether or not anything remains
//     // (indicates that there were incorrect brackets)
//     return !inputString.length;
// };