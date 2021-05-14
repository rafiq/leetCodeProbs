/**
 * @param {string} s
 * @return {boolean}
 */
 var validPalindrome = function(s) {
    // for (let i = 0;  i < s.length ; i++) {
    //     console.log(s.slice(0,i) + s.slice(i + 1))
    //     if (isPalindrome(s.slice(0,i) + s.slice(i + 1))) return true;
    // }
    // return false;

    // 1st case: delete left char
    // 2nd case: delete right char
    let left = 0, right = s.length-1;
    while (left < right) {
        if (s[left] !== s[right]) {
            return (isPalindrome(left+1, right, s)
                   || isPalindrome(left, right-1, s));
        }
        left++, right--;
    }
    return true;
};

function isPalindrome(left, right, s) {
    while (left < right) {
        if (s[left] !== s[right]) return false;
        left++, right--;
    }
    return true;
}
// Time Complexity: O(n)
// Space Complexity: O(1)
// var validPalindrome = function(s) {
//     return isPalindrome(0, s.length-1, 0);

//     function isPalindrome(start, end, deleted) {
//         while (start < end) {
//             if (s[start] !== s[end]) {
//                 if (deleted == 0) {
//                     return isPalindrome(start + 1, end, deleted + 1) ||
//                         isPalindrome(start, end - 1, deleted + 1);
//                 }
//                 else return false;
//             }
//             start++, end--;
//         }
//         return true;
//     }
//     // Time Complexity: O(N), we visit every letter once
//     // Space Complexity: O(1), call stack can go as deep as 1
// };
// function isPalindrome(word) {
//     return word === word.split("").reverse().join("")
// }
console.log(
    validPalindrome("aba"),//true
    validPalindrome("abca"),//true
    validPalindrome("eccer"),//true
    validPalindrome("abc"),//false
)

