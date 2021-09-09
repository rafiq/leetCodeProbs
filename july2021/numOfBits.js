/**
 * @param {number} n - a positive integer
 * @return {number}
 */
 var hammingWeight = function(n,withPaddingLength = 16) {
    // let count = 0
    // let str = n.toString(2)

    // let bit = str.padStart(withPaddingLength,"0")
    // bit.split("").forEach(el => {
    //     if (el === "1") count++
    // })
    //     return count

    return n.toString(2).match(/1/g)?.length ?? 0;


//     let res = 0;
//   let cur = 1;
//   for (let i = 0; i < 32; i++) {
//     if ((n & cur) !== 0) {
//       res++;
//     }
//     cur = cur << 1;
//   }
//   return res;
};
console.log(hammingWeight(00000000000000000000000010000000),hammingWeight(00000000000000000000000000001011),
hammingWeight(11111111111111111111111111111101))