/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let p1 = 0;
    let p2 = s.length - 1;
    while (p1 < p2){
        // The below is skipping the character(the first while statement for the left pointer and the second while case is for the right pointer) if it is not a valid character, or in this case, if it is not alphanumeric, then it will skip that character but not go beyond the bounds of the string.
        while (!isValidCharacter(s[p1]) && p1 < s.length - 1){
            p1 ++;
        }
        while (!isValidCharacter(s[p2]) && p2 > 0){
            p2 --;
        }
        // The below is checking, again, if the character is valid from both pointers, and then it checks to see if the two pointers characters DO NOT match each other in the lowercase version, and in which case it will return false.
        if(isValidCharacter(s[p1]) && isValidCharacter(s[p2]) && s[p1].toLowerCase() !== s[p2].toLowerCase()){
            return false;
        }
        // I am not sure why this is here because I would think that the above scenarios take care of the incrementation? Oh no, I see, this is the general increment per loop, and the above are an extra increment only if that character is not valid.
        p1 ++;
        p2 --;
    }
    // Here is the most likely answer which is that the string is a palindrome, and all the possible false cases have been taken care of above.
    return true;

};
// I used regular expression to do the same as below, but I like how they put it in its own function outside of the original function because I can see this function being needed by many processes within a program.
let isValidCharacter = function(char){
    let validCharacter = "abcdefghijklmnopqrstuvwxyz1234567890";
    return validCharacter.indexOf(char.toLowerCase()) > -1;
}