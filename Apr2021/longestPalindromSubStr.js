/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
    var start = 0;
    var end = 0;
    var len = s.length;
    var num = 0;
    for (var i = 0; i < len; i++) {
      num = Math.max(expandAroundCenter(s, i, i), expandAroundCenter(s, i, i + 1));
      if (num > end - start) {
        start = i - Math.floor((num - 1) / 2);
        end = i + Math.floor(num / 2);
      }
    }
    return s.slice(start, end + 1);
  };

  var expandAroundCenter = function (s, left, right) {
    var l = left;
    var r = right;
    var len = s.length;
    while (l >= 0 && r < len && s[l] === s[r]) {
      l--;
      r++;
    }
    return r - l - 1;
  };
//     if (s.length < 1 || s === null) return "";

//     let longest = "";

//     for (let i = 0; i < s.length; i++) {

//         let evenPalindrom = expandFromCenter(s,i,i)
//         let oddPalindrom = expandFromCenter(s,i - 1, i)

//         if (oddPalindrom.length > longest.length) {
//             longest = oddPalindrom;
//         }
//         if (evenPalindrom.length < longest.length) {
//             longest = evenPalindrom;
//         }
//     }
//     return longest;
// };
// function expandFromCenter(str,left,right) {
//     let i = 0;

//     while (str[left - i] && str[left - i] === str[right + i]) {
//         i++;
//     }
//     i--;
//     return str.slice(left - i,right + i + 1)
// }
console.log(
    longestPalindrome("babad"),//Output: "bab")
    longestPalindrome("cbbd"),//Output: "bb")
    longestPalindrome("a"),//Output: "a")
    )



        // WHIle my code worked, it was too slow to pass this solution, so I had to look up another ansewr to this one.
        // let subStrArray = [];

        // for (let i = 0; i < s.length; i++) {
        //     for (let j = i + 1; j < s.length + 1; j++) {
        //         if (isPalindrom(s.slice(i,j))) {
        //             subStrArray.push(s.slice(i,j))
        //         }
        //     }
        // }
        // return subStrArray.reduce((acc,curr) => {
        //     if (curr.length > acc.length) {
        //         acc = curr;
        //     }
        //     return acc;
        // },"")