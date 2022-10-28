/**
 * @param {string} s
 * @return {string}
 */
 var decodeString = function(s) {

    let stack = [];

    // number stack


    // square braket stack

    // letter

    /**
     * {3:[a2[c]]}
     * [3,]
     *
     *
     */
    // return s;

    const stack = [];
    const isNum = ch => ch >='0' && ch <= '9';

    for(let i=0;i<s.length;i++) {
        const ch = s[i];
        if (ch !== ']') {
            stack.push(ch);
        } else {
            let chars  = '';
            while(stack[stack.length-1] !== '[') {
                chars = stack.pop() + chars;
            }
            stack.pop();
            let num = '';
            while(stack.length && isNum(stack[stack.length-1])) {
                num = stack.pop() + num;
            }
            stack.push(...chars.repeat(parseInt(num)))
        }
    }

    return stack.join('');


};
console.log(
    decodeString("3[a2[c]]")//"accaccacc"
);