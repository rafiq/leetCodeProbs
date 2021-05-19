/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
 var multiply = function(num1, num2) {
    let result = Array(num1.length + num2.length).fill(0);

    for (let j = num2.length - 1; j > -1; j--) {
        for (let i = num1.length - 1; i > -1; i--) {
            let product = num1[i] * num2[j]
            let index = num1.length + num2.length - 1 - (num2.length - 1 - j + num1.length - 1 - i);
            result[index] += product;
            if (result[index] > 9) {
                result[index - 1] += Math.floor(result[index] / 10);
                result[index] %= 10;
            }
        }
    }

    while (result[0] === 0) {
        result.shift()
    }

    return result.length === 0 ? "0" : result.join("");
};
console.log(
    multiply("123","456"),//56088
)

// ! I am wondering how the below answer which is the fastest is able to do the multiplication in the correct order. It is definitely more simple than the one above.

var multiply = function(num1, num2) {
    let n = num1.length;
    let m = num2.length;
    const arr = new Array(n + m).fill(0);
    for (let i = n - 1; i >= 0; i--) {
        let numChar1 = num1[i];
        for (let k = m - 1; k >= 0; k--) {
            let numChar2 = num2[k];
            let product = (numChar1) * (numChar2);
            arr[i + k + 1] += product;
            arr[i + k] += Math.floor(arr[i + k + 1] / 10);
            arr[i + k + 1] %= 10;
        }
    }
    // console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            return arr.slice(i).join("");
        }
    }
    return "0";
    // return arr.join("");
};

// ! This one below looks a little more understandable. I like how they put two of the processes into helper functions and that makes this much more understandable.
var multiply = function(num1, num2) {
    if (num1 === '0' || num2 === '0') return '0';

    let product = [];

    const ZERO = '0'.charCodeAt(0);
    const getIntValue = (a, i) => a.charCodeAt(a.length - i- 1) - ZERO;

    const setDigit = (i, v, c) => {
        v += (product[i] || 0) + c;
        product[i] = v % 10;
        return Math.floor(v / 10);
    }

    for (let i = 0; i < num1.length; ++i) {
        let carry = 0;
        let digit = i;
        const v1 = getIntValue(num1, i);
        for (let j = 0; j < num2.length; ++j, digit++) {
            const v2 = getIntValue(num2, j);
            const p = v1 * v2;
            carry = setDigit(digit, p, carry);
        }
        while (carry && digit) {
            carry = setDigit(digit++, 0, carry);
        }
    }

    return product.reverse().join('');
};