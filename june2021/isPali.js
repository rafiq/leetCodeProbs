/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    let cleanStr = s.replace(/[^a-z0-9]/gi,"").toLowerCase()
    let j = cleanStr.length - 1;

    for (let i = 0; i < j; i++,j--) {
        if (cleanStr[i] !== cleanStr[j]) return false;
    }
    return true;
};
console.log(
    isPalindrome("A man, a plan, a canal: Panama"),//true;
    isPalindrome("race a car"),//false  ;
)