/**
 * @param {string} s
 * @return {number}
 */
 var removePalindromeSub = function(s) {
    // let subsequenceArray = [];
    // let count = 0;

    // for (let i = 0; i < s.length; i++) {
    //     for (let j = i + 1; j < s.length + 1; j++) {
    //         subsequenceArray.push(s.slice(i,j))
    //     }
    // }
    // subsequenceArray.sort((a,b) =>  b.length - a.length );

    // while (s.length > 0) {
    //     subsequenceArray.forEach(word => {
    //         if (isPalindrome(word) && s.includes(word)) {
    //             count++;
    //             s = spliceSlice(s,s.indexOf(word),word.length);
    //             subsequenceArray.splice()
    //             console.log(s)
    //         }
    //     })
    // }
    //  return subsequenceArray
    if (!s) return 0
    for (let i = 0, j = s.length - 1; i < j; i++, j--)
        if (s.charAt(i) !== s.charAt(j)) return 2
    return 1
};
function isPalindrome(str) {
    return str === str.split("").reverse().join("");
}
function spliceSlice(str, index, count, add) {
    if (index < 0) {
      index = str.length + index;
      if (index < 0) {
        index = 0;
      }
    }

    return str.slice(0, index) + (add || "") + str.slice(index + count);
  }
console.log(
    // removePalindromeSub("ababa"),//1
    // removePalindromeSub("abb"),//2
    // removePalindromeSub("baabb"),//2
    removePalindromeSub("bbaabaaa"),//2
)