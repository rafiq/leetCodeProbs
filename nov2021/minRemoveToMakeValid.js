/**
 * @param {string} s
 * @return {string}
 */
 var minRemoveToMakeValid = function(s) {

    // let stack = [];

    // for (let el of s) {
    //     if (el === "(" )
    //         stack.push(el);

    //     if (el === ")") {
    //         if (!stack.length) {
    //             stack.push(el);
    //             continue;
    //         }
    //         stack.pop();
    //     }

    // }
    // s = s.split("");

    // while (stack.length) {
    //     let curr = stack.shift();
    //     // console.log(stack)
    //     s.splice(s.indexOf(curr),1);
    // }
    // return s.join("");
    let op = []
    s = s.split('')
    for(let i=0; i<s.length; i++){
        if(s[i]==='(') op.push(i)
        if(s[i]===')') {
            if(op.length) op.pop(); else s[i]=''
        }
    }
    while(op.length) s[op.pop()]='';
    return s.join('')
};
console.log(
    minRemoveToMakeValid("(a(b(c)d)"),
    minRemoveToMakeValid("lee(t(c)o)de)"),
    minRemoveToMakeValid("))(("),
);