/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    // let target = num;
    // if (num < 9) return num;
    // target = String(num).split("").reduce((acc,curr) => acc += Number(curr),0);
    // return target <= 9 ? target : addDigits(target);

    return num % 9;
};
console.log(
    addDigits(38),//2;
    addDigits(9),//2;
    addDigits(10),//2;
    addDigits(18),//2;
    addDigits(13),//2;
)