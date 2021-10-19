/**
 * @param {number} n
 * @return {boolean}
 */
 var isUgly = function(n) {
    // if (n === 1) return true;

    // let primeArray = [];
    // for (let i = 2; i <= n; i++) {
    //     console.log(`${n} % ${i} = ${n % i} [${primeArray}]`)
    //     if (i > 5 && primeArray.length < 1) return false;
    //     if (n % i === 0) primeArray.push(i);
    //     if (i > 5 && !primeArray.includes(2) || !primeArray.includes(3) || !primeArray.includes(5)) return false;

    // }
    // return n > 1;
    if (!n) return false;
    while (n > 1) {
        if (n % 2 == 0) n /= 2;
        else if (n % 3 == 0) n /= 3;
        else if (n % 5 == 0) n /= 5;
        else return false;
    }
    return n == 1;
};
console.log(
    isUgly(6),//true
    isUgly(8),//true
    isUgly(14),//false
    isUgly(1),//true
    isUgly(11),//false
    isUgly(7),//false
    isUgly(22),//false
)