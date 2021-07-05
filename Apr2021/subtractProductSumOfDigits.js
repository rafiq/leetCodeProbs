/**
 * @param {number} n
 * @return {number}
 */
 var subtractProductAndSum = function(n) {
    let sumTotal = String(n).split("").reduce((acc,curr) => acc + Number(curr),0);
    let multiplicativeTotal = String(n).split("").reduce((acc,curr) => acc *= Number(curr),1)
    return `${multiplicativeTotal - sumTotal}`
};
console.log(
    subtractProductAndSum(234),//15
    subtractProductAndSum(4421),//21
)

//Nothing really special about the fastest answer below, but I do like how they streamlined the speed of the function by cutting off the last digit and multiplying and adding that to seperate variable totals, and then setting the number to the number without the last digit. This is in the while loop until the number is zero.
const subtractProductAndSum = n => {
    let product = 1
    let sum = 0
    let copy = n

    while (copy > 0) {
        let digit = copy % 10
        product = product * digit
        sum = sum + digit
        copy = Math.floor(copy / 10)
    }

    return product - sum
    };