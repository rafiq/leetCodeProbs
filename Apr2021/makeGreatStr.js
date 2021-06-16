/*
 * @param {string} s
 * @return {string}
 */

var makeGood = function (s) {
    let i = 0;
    let j = 1;
    while (i < s.length - 1) {
        if (isLowerAndUpper(s[i], s[j])) {
            s = s.replace(s[i] + s[j], "");
            i = 0;
            j = 1
        } else {
            i++;
            j++
        }
    }
    return s
};
function isLowerAndUpper(char1, char2) {
    return char1 === char2.toUpperCase() && char1 !== char2 || char2 === char1.toUpperCase() && char2 !== char1
}
console.log(
    makeGood("abBAcC"), //""
    makeGood("leEeetcode"), //""
    makeGood("Pp"), //""
);

// THis is very interesting using the stack method to solve this problem. I thought I knew the stack, but I didn't realize I could use this on this problem. I really need to start reading Cracking the Coding Interview ASAP
var makeGood = function(s) {
    const stack = [''];

    for(let c of s) {
        let top = stack[stack.length-1];
        if(top.toLowerCase() === c.toLowerCase() && top !== c) stack.pop()
        else stack.push(c);
    }
    return stack.join('');
};

// The below is a solution that I was thinking about doing, but I didn't know how exactly to implement the re organizing the string without the lower and upper case letters. They did it by using substring method and then recursively taking the makeGood function of that new string.
var makeGood = function(s) {

    for (let i=0; i<s.length-1; i++){
        if (Math.abs(s[i].charCodeAt()-s[i+1].charCodeAt())===32){
            return makeGood(s.substring(0,i)+s.substring(i+2))
           }
        }
      return s;
  };