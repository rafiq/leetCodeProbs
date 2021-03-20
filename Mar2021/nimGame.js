/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function(n) {

    if (n === 1) return true;
    return n % 4 === 0 ? false : true;
};
console.log(
    canWinNim(4),//false;
    canWinNim(2),//true

)