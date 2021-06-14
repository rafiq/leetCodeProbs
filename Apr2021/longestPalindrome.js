/**
 * @param {string} s
 * @return {number}
 */
 var longestPalindrome = function(s) {
    // let oddsArray = [];
    // let evensArray = [];
    // let result = [];
    // let charArray = Object.entries(s.split("").reduce((acc,curr) => {
    //     acc[curr] ? acc[curr]++ : acc[curr] = 1;
    //     return acc;
    // },{}))

    // charArray.forEach(arr => {
    //     if (arr[1] % 2 === 1) oddsArray.push(arr);
    //     if (arr[1] % 2 === 0) evensArray.push(arr);
    // })
    // evensArray = evensArray.map(arr => arr[0].repeat(arr[1]))
    // let longestOddChar = oddsArray.map(arr => arr[0].repeat(arr[1])).sort((a,b) => a.length - b.length)[oddsArray.length - 1]
    // result.push(longestOddChar);

    // evensArray.forEach(el => {
    //     let len = el.length / 2;
    //     result.unshift(el.slice(0,len))
    //     result.push(el.slice(0,len))
    // })

    // return result.join("").length; //=== result.reverse().join("")
    let longest = 0;
    let keys = {};

      for (const char of s) {
          keys[char] = (keys[char] || 0) + 1;
          if (keys[char] % 2 == 0) longest += 2;
      }
      return s.length > longest ? longest + 1 : longest;
};
console.log(
    longestPalindrome("aaabbbbccssswwwwwcbvcdd"),// 7)
)