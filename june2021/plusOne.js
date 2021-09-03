/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
    let lastDigit = digits.length - 1;

    for (let i = lastDigit; i > lastDigit - 1; i--) {
        if (digits[i] === 9) {
            if (digits[i - 1] === 9) {
                digits[i] = 0;
                return plusOne(digits.slice(0,i)).concat(digits.slice(i))
            } else {
                if (digits[i - 1] === undefined) {
                    digits[i] = 0;
                    digits.unshift(1);
                } else {
                    digits[i] = 0;
                    digits[i - 1] += 1;
                }
            }
        } else {
            digits[i] += 1;
        }
    }
    return digits;
};
console.log(
    plusOne([4,3,2,1]),//4322
    plusOne([4,3,2,9]),//4320
    plusOne([9]),//4320
    plusOne([9,9]),//100
    plusOne([9,9,9]),//100
)

// ! Crazy Super Easy solution!!!
var plusOne = function(digits) {
    let i = digits.length - 1;
    while(digits[i] == 9){
        digits[i] = 0;
        i--;
    }
    if(i >= 0) digits[i]++;
    else digits.unshift(1)


    return digits;
};

