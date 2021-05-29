/**
 * @param {string} sentence
 * @return {boolean}
 */
 var checkIfPangram = function(sentence) {
    let alpha = "abcdefghijklmnopqrstuvwxyz";
    let copyLetters = alpha.slice();

    for (let i = 0; i < alpha.length; i++) {
        if (sentence.includes(alpha[i])) {
            copyLetters = copyLetters.replace(alpha[i],"");
        }
    }
    return !copyLetters;
};
console.log(
    checkIfPangram("thequickbrownfoxjumpsoverthelazydog"),//true;
    checkIfPangram("leetcode"),//false;
)