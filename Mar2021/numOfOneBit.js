/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    // let num = parseInt(n.toString().split("").reverse().join(""),2)
    // let num = parseInt(n,2)

    // return num;
    // let nString = n.split("");
    // let bitsArray = [];

    // for (let i = 0; i < nString.length; i += 8) {
    //     bitsArray.push(nString.substr(i,8))
    // }
    // return n;

    // let count = 0;
    // while (n !== 0) {
    //   n = n & (n - 1);
    //   count++;
    // }

    // return count;

    let str = n.toString(2);
    let count = 0;

  for (let s of str) {
    if (s === '1') count ++
  }
  return count


// let count = 0
//   while (n) {
//     if (n % 2) count++
//     n = parseInt(n / 2)
//   }
//   return count

};
console.log(
    hammingWeight(00000000000000000000000000001011),// 3)
    hammingWeight(00000000000000000000000010000000),// 1
    hammingWeight(111111111111111111111111111111011),// 31
)