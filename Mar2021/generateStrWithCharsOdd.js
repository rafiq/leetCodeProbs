/**
 * @param {number} n
 * @return {string}
 */
 var generateTheString = function(n) {
    // if (n % 2 === 0) {
    //     return Array(n).fill(0).reduce((acc,_,idx) => {
    //         while (idx < n - 1) acc += "a";
    //         acc += "b";
    //         return acc;
    //     },"")
    // } else {
    //     return Array(n).fill(0).reduce((acc,curr) => {
    //         acc += "a";
    //         return acc;
    //         },"")
    // }
    if (n % 2 === 0) {
        return "a".repeat(n - 1) + "b";
      } else {
        return "a".repeat(n);
      }
};
console.log(
    generateTheString(4),//"pppz"
)