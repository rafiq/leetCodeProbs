/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    let splitArray = s.slice();
    let newString = chunkString(splitArray,k)
    let finalArray = [];

    for (let i = 0; i < newString.length; i++) {
        if (i % 2 === 0) {
            finalArray.push(newString[i].split("").reverse().join(""))
        } else {
            finalArray.push(newString[i])
        }
    }

    return finalArray.join("");
};
function chunkString(str, length) {
    return str.match(new RegExp('.{1,' + length + '}', 'g'));
}
// while (end < s.length + 4) {
//     splitArray.push(s.slice(start,end))
//     start = end;
//     i++;
//     end = i * end;
// }
// s.split("").forEach((letter,idx) => splitArray.push(letter))

// function cut(str, cutStart, cutEnd){
//     return str.substr(0,cutStart) + str.substr(cutEnd+1);
//   }

console.log(
    // reverseStr("abcdefg",2),// "bacdfeg" length 7
    reverseStr("abcdefg1234567890",2)// "bacdfeg" length 17
)
// 541. Reverse String II
// Given a string and an integer k, you need to reverse the first k characters for every 2k characters counting from the start of the string. If there are less than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and left the other as original.