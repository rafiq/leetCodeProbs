/**
 * @param {string} s
 * @return {boolean}
 */
 var areNumbersAscending = function(s) {
    let numArray = s.split(" ").map(Number).filter(el => Number.isInteger(el))

    for (let i = 1; i < numArray.length; i++) {
        if (numArray[i - 1] >= numArray[i]) return false;
    }

    return true;
};
console.log(
    areNumbersAscending("1 box has 3 blue 4 red 6 green and 12 yellow marbles"),
    areNumbersAscending("hello world 5 x 5"),
    areNumbersAscending("sunset is at 7 51 pm overnight lows will be in the low 50 and 60 s"),
    areNumbersAscending("4 5 11 26"),
);