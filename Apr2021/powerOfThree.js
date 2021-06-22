/**
 * @param {number} n
 * @return {boolean}
 */
 var isPowerOfThree = function(n) {
    // for (let i = 0; i < n; i++) {
    //     if (Math.pow(3,i) === n) return true;
    // }
    // return false;
    if(n === 1) {
        return true;
      } else if(n > 1 && n%3 === 0) {
        return isPowerOfThree(n/3);
      } else {
        return false;
      }

};
console.log(
    isPowerOfThree(27),//true;
    isPowerOfThree(9),//true;
    isPowerOfThree(0),//false;
    isPowerOfThree(45),//false;
)