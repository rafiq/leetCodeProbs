/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
 var countOdds = function(low, high) {
    let count = 0
    let i = low;
    if (low % 2 === 0) {
        i++
    }

    while (i <= high) {
        count++
        i += 2
    }

    return count
    // while (i <= high) {
    //     if (i % 2 === 1) count++
    //     i++
    // }
};
console.log(
    countOdds(3,7),
    countOdds(8,10),
)

// just take a number and divide by 2 to get the number of odd numbers in that range. So simple
/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
 var countOdds = function(low, high) {
    if (high % 2 === 1){
        return (high + 1 - low) / 2;
    }
    return (high - low) / 2;
};