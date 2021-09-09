/**
 * @param {string} s
 * @return {string}
 */
 var removeOuterParentheses = function(s) {
    let result = []
    let stack = []
    let temp = ""

    for (let i = 0; i < s.length; i++) {
        temp += s[i]

        if (s[i] === "(") stack.push(s[i])
        if (s[i] === ")") stack.pop()
        if (stack.length === 0) {
            result.push(temp)
            temp = ""
        }
    }

    return result.map(el => el.slice(1,el.length - 1)).join("");
};
console.log(
    removeOuterParentheses("(()())(())(()(()))"),//"()()()()(())")
    removeOuterParentheses("(()())(())"),//
    removeOuterParentheses("()()"),//
)