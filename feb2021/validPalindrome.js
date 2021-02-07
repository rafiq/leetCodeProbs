/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s === "" ? [] : s;

    let cleanString = s.toLowerCase().replace(/[^0-9a-z]/gi, '')
    let reversedString = cleanString.split("").reverse().join("")
    return cleanString === reversedString;
};

isPalindrome("A man, a plan, a canal: Panama");
isPalindrome("race a car");
isPalindrome("");

// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// Note: For the purpose of this problem, we define empty string as valid palindrome.