/**
 * @param {string} s
 * @return {number}
 */
 var secondHighest = function(s) {
    return s.match(/\d/g) && new Set(s.match(/\d/g).sort((a,b) => b - a)).size > 1 ? +Array.from(new Set(s.match(/\d/g).sort((a,b) => b - a)))[1] : -1
};
console.log(
    secondHighest("dfa12321afd"),//2
    secondHighest("abc1111"),//-1
    secondHighest("abc"),//-1
    secondHighest("ck077"),//0
)

// DUH!!! Just iterate throught the string and set a variable for largest and second largest, then check to see if the current character is the largest OR second largest, then return the second largest at the end. Very simple. Just a for loop
var secondHighest = function(s) {
    let largest = -1;
    let secondLargest = -1;
    for (let i = 0; i < s.length; i++) {
        const charCode = s.charCodeAt(i);
        if (charCode >= 48 && charCode <= 57) {
            const num = parseInt(s[i]);
            if (num > largest) {
                secondLargest = largest;
                largest = num;
            } else if (num < largest && num > secondLargest) {
                secondLargest = num;
            }
        }
    }

    return secondLargest;
};