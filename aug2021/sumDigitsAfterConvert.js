/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
 var getLucky = function(s, k) {
    let strOfDigits = s.split('').map(el => el.charCodeAt() - 96).join("")
    let count = k
    const joinDigits = num => {
        let numStr = num.toString()
        return numStr.split("").reduce((acc,curr) =>  acc + +curr,0)
    }

    while (count) {
        strOfDigits = joinDigits(strOfDigits)
        count--
    }

    return strOfDigits
};
console.log(
    getLucky("zbax" ,2),
    getLucky("leetcode",  2),
)