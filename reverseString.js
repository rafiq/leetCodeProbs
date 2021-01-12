var reverseString = function(s) {
  let start = 0;
  let end = s.length - 1;

  while (start < end) {
    let temp = s[start];
    s[start] = s[end];
    s[end] = temp;
    start++;
    end--;
  }
  return s;
};

console.log(reverseString(["h","e","l","l","o"]));
// let newString = [];
//   return s.reverse(newString);

// Second fastest code
// var reverseString = function(s) {
//     for (let i = 0, temp = '', len = s.length; i < len / 2; i++) {
//         temp = s[i];
//         s[i] = s[len - i - 1];
//         s[len - i - 1] = temp;
//         console.log(s)
//     }
//     return s;
// };

// var reverseString = function(s) {
//   return s.reverse()
// }
// Fastest time
// var reverseString = function(s) {
//   for (let i = 0; i <= s.length/2-1; i++){
//       [s[i], s[s.length - 1 - i]] = [s[s.length - 1 - i],s[i]]
//   }
// };

// /*        let currentIndex = s[i];
//       s[i] = s[s.length -1 -i];
//       s[s.length -1 -i] = currentIndex;
// */
// // Write a function that reverses a string. The input string is given as an array of characters char[].

// // Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// // You may assume all the characters consist of printable ascii characters.