/**
 * @param {string} s
 * @return {number}
 */
 var uniqueLetterString = function(s) {
//  get all substrings

//  in each substring find the unique character matches
    let result = [];

    const subsetsOfString = (str, curr = "", index = 0) => {
        if (index == str.length) {
            result.push(curr);
            return result;
          }
          subsetsOfString(str, curr, index + 1);
          subsetsOfString(str, curr + str[index], index + 1);
    }

    subsetsOfString(s);
    return result;
};
console.log(
    uniqueLetterString("ABC")
);

//  if (s === "") {
    return 0;
}
// initialise to -1 because array is 0-indexed
let lastL = new Array(26).fill(-1);
let lastR = new Array(26).fill(s.length);
let contribute = new Array(s.length).fill(0);
for (let i = 0; i < s.length; i++) {
    let idx = s.charCodeAt(i) - 65;
    let lastOccur = lastL[idx];
    // we get the number of chars between current character and
    // last occurrence of current character (assuming we traverse from left)
    // + 1 (current character)
    contribute[i] = i - lastOccur;
    lastL[idx] = i;
}
for (let i = s.length-1; i >= 0; i--) {
    let idx = s.charCodeAt(i) - 65;
    let lastOccur = lastR[idx];
    // we get the number of chars between current character and
    // last occurrence of current character (assuming we traverse from right)
    // + 1 (current character)
    contribute[i] *= lastOccur - i;
    lastR[idx] = i;
}
return contribute.reduce((acc,cur) => acc + cur);
// T.C: O(N)
// S.C: O(N)