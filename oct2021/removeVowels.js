/**
 * @param {string} s
 * @return {string}
 */
 var removeVowels = function(s) {
    // return s.replace(/[aeiou]/gi,"");
    let result = "";
    let strArray = s.toLowerCase().split("");
    const VOWELS = "aeiou"
    for (let char of strArray) {
        if (!VOWELS.includes(char) ) {
            result += char;
        }
    }
    return result;

};
console.log(
    removeVowels("leetcodeisacommunityforcoders"),
    removeVowels("aeiou"),
);