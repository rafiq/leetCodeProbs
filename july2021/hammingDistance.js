/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
 var hammingDistance = function(x, y) {
    // let firstBinary = x.toString(2)
    // let secondBinary = y.toString(2)

    // let longer = firstBinary.length > secondBinary ? firstBinary : secondBinary;
    // let shorter = firstBinary.length > secondBinary ? secondBinary : firstBinary;
    // let count = 0
    // // console.log(shorter, longer)
    // shorter =  shorter.split("").reverse()
    // while (shorter.length < longer.length) {
    //     shorter.unshift("0")
    // }
    // // console.log(shorter, longer)
    // shorter = shorter.join("")

    // longer.split("").forEach((el,idx) => {
    //     if (el !== shorter[idx]) count++
    // })

    // // return count

    // return [shorter,longer, count]
    let dist = 0
    let comb = x ^ y
    while (comb !== 0) {
        if (comb % 2) dist++
        comb >>= 1
    }
    return dist
};
console.log(
    hammingDistance(1,4),//2
    hammingDistance(4,14),//2
)