/**
 * @param {string} keyboard
 * @param {string} word
 * @return {number}
 */
 var calculateTime = function(keyboard, word) {
    let sum = 0;
    let leftPointer = 0;

    word.split("").forEach(char => {
        let rightPointer = keyboard.indexOf(char);
        sum += Math.abs(leftPointer - rightPointer);
        leftPointer = rightPointer;
    })

    return sum;
};
console.log(
    calculateTime("abcdefghijklmnopqrstuvwxyz", word = "cba"),//4
    calculateTime("pqrstuvwxyzabcdefghijklmno", word = "leetcode"),//73
);