/**
 * @param {number} n
 * @return {number}
 */
 var countPrimes = function(n) {
//     let count = 0;
//     if (n > 2) count ++

//     for (let i = 3; i < n; i += 2) {
//         if (i % 3 === 0 || i % 5 === 0 || i % 7 === 0 || i % 11 === 0)  count++
//         // if (i % 2 !== 0 && i % 1 === 0)
//         // console.log(i,(i % 3))
//     }
//     return count
// };
// THIS WAS A VERY INTERESTING PROBLEM TO SOLVE BECAUSE MY ORIGINAL DOUBLE LOOP TOOK TOO LONG AND I COULD NOT UNDERSTAND THE ANSWER BELOW UTNIL I READ ANOTHER PERSON WITH THE SAME ANSWER AND THEY EXPLAINED IT AS FIRST MARKING ALL THE MULTIPLES OF EACH NUMBER STARTING FROM 2 UP TO THE N NUMBER. ON EACH NUMBER WE GO UP THE ENTIRE ARRAY AND MARK EVERY MULTIPLE OF THAT NUMBER FALSE BECAUSE THEY WON'T BE A PRIME. FOR EXAMPLE, 2,4,6,8.... NEXT WOULD BE 3 SO 6,9,12,.. WOULD ALL BE MARKED FALSE UP TO N. AND SO ON UNTIL ALL NUMBERS UP TO N HAVE BEEN MARKED WITH FALSE. THE ONES THAT HAVE NOT BEEN MARKED WITH FALSE WILL BE THE PRIME NUMBERS BECAUSE THEY WERE NOT MULTIPLES OF ANY NUMBERS BELOW THEM EXCEPT 1 AND THE NUMBER. THE BELOW SOLUTION FINALLY FILTERS ALL THE TRUE ELEMENTS AND THEN GIVES THE LENGTH OF THAT ARRAY. GENIUS.
let primes = new Array(n).fill(true);
primes[0] = false, primes[1] = false;
for (let i = 2; i < n; i++) {
    for (let j = i**2; j < n; j += i) {
        primes[j] = false;
    }
}
return primes.filter(bool => bool == true).length;
// let result = 0;

// for (let i = 2; i < n; i++) {
//     if (isPrime(i)) {
//         result++;
//     }
// }

// return result;
};

var isPrime = function(n) {
for (let i = 2, s = Math.sqrt(n); i <= s; i++) {
    if (n % i === 0) {
        return false;
    }
}

return true;
};

console.log(
    countPrimes(10),// 4
)
// The bleow is the fastest answer which appartently uses zeros and ones opposed to booleans but all else is mostly the same. Another difference is the function uses a guard statement to count the primes that is smart because that works perfectly since all the numbers below the current number would have checked if the current number is prime or not.
var countPrimes = function (n) {
    const array = new Uint8Array(n)
    let ans = 0
    for (let i = 2; i < n; i++) {
        if (array[i]) continue
        ans++
        for (let j = i * i; j < n; j += i) {
            array[j] = 1
        }
    }
    return ans
};