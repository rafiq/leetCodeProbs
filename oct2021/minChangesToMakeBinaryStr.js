/**
 * @param {string} s
 * @return {number}
 */
 var minOperations = function(s) {
    // let count = 0;

    // while (!isAlternating(s)) {
    //     s = s.split("");

    //     for (let i = 0; i < s.length; i++) {

    //     }


    // }

    // return count;
//     const N = s.length;
//   const chars = s.split("").map(Number);
//   const s1 = Array.from({ length: N }, (_, i) => (i % 2 === 0 ? 1 : 0));
//   const s2 = Array.from({ length: N }, (_, i) => (i % 2 === 0 ? 0 : 1));
//   return Math.min.apply(
//     null,
//     chars.reduce(
//       (acc, el, i) => [
//         acc[0] + (el !== s1[i] ? 1 : 0),
//         acc[1] + (el !== s2[i] ? 1 : 0),
//       ],
//       [0, 0]
//     )
//   );
let s0 = 0;
let s1 = 0;
let last = "0"
for(let i=0; i<s.length; i++){
    if(s[i]===last)s0++;
    if(s[i]!==last)s1++;
    last = last==="0" ? "1" : "0"
}
return Math.min(s0, s1)
};
function isAlternating(str) {

    for (let i = 0; i < str.length; i++) {
        if (str[i] === "0" && str[i + 1] === "0") return false;
        if (str[i] === "1" && str[i + 1] === "1") return false;
    }
    return true
}
console.log(
    minOperations("0100"),//1
    minOperations("1111"),//2
    minOperations("10"),//0
)