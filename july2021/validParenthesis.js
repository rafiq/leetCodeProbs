/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    let hash = {
        ")":"(",
        "]":"[",
        "}":"{"
    }
    let stack = []

    for (let char of s) {
        if (char === "{" || char === "[" || char === "(") stack.push(char)
        else if (hash[char] !== stack[stack.length - 1]) return false
        else stack.pop()
    }

    return stack.length === 0
};
console.log(
    isValid("()[]{}"),//true
    isValid("{[]}"),//true
    isValid("{[]}"),//true
    isValid("{[]"),//false
    isValid("(]"),//false
    isValid("([)]"),//false
)