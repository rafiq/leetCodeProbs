/**
 * @param {number} n
 * @return {boolean}
 */
 var isHappy = function(n) {

    while (n > 5) {
        n = getExponentialSum(n);
    }
    return n === 1
    // return getExponentialSum(getExponentialSum(getExponentialSum(getExponentialSum(getExponentialSum(7)))))
};
function getExponentialSum(num) {

    return num.toString().split("").reduce((acc,curr) => {
        acc += Number(curr) * Number(curr);
        return acc;
    },0)
}
console.log(
    isHappy(19),//true
    isHappy(7),//true
    isHappy(12),//false
)