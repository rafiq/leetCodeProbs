/**
 * @param {string} word
 * @return {boolean}
 */
 var detectCapitalUse = function(word) {
    // return word.split("").every(char => char.toUpperCase() === char)
    // return word[0].toUpperCase() + word.slice(1).toLowerCase() === word;
    return word.toLowerCase() === word || word.toUpperCase() === word || word[0].toUpperCase() + word.slice(1).toLowerCase() === word;
};
console.log(
    detectCapitalUse("FlaG"),//false;
    detectCapitalUse("USA"),//TRUE
    detectCapitalUse("Google"),//TRUE
    detectCapitalUse("leetcode"),//TRUE
)

// The below is a smart and quick solution because the guy is only first checking the first and last number to see if they are both lowercase or not. If so, then he does a for loop to check and make sure every letter is lowercase in the rest of the word. If one letter is not, then return false. Otherwise, if the first letter or last letter is uppercase, then he does a for loop starting at the second letter and checks to see if that every letter is lowercase. If one letter is not lowercase, then he breaks the loop and returns false.
var detectCapitalUse = function(word) {
    let l = word.charCodeAt(0), r = word.charCodeAt(word.length-1);
    if (l < 91 && r < 91) {
        for (let i = 1; i < word.length-1; i++) {
            if (word.charCodeAt(i) > 90) return false;
        }
    }
    else {
        for (let i = 1; i < word.length; i++) {
            if (word.charCodeAt(i) < 91) return false;
        }
    }
    return true;
    // Time Complexity: O(n)
    // Space Complexity: O(1)
};

// The below is very smart as well and uses less lines of code too!
var detectCapitalUse = function(word) {
    const size = word.length;
    let countCapital = 0;

    for (let i = 0; i < size; i++) {
        if (word[i] === word[i].toUpperCase()) {
            countCapital += 1;
        }
    }

    // all uppercsase, all lowercases,
    // and only first one uppercase and remaining is lowercase
    return countCapital === size ||
        countCapital === 0 ||
        (word[0] === word[0].toUpperCase() && countCapital === 1)

}