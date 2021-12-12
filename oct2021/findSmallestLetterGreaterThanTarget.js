/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
 var nextGreatestLetter = function(letters, target) {

    for (let i = 0; i < letters.length; i++) {
        if (letters[i] > target) return letters[i];
    }

    return letters[0];
};
console.log(
    nextGreatestLetter(["c","f","j"], target = "j"),//"c"
    nextGreatestLetter(["c","f","j"], target = "a"),//"c"
    nextGreatestLetter(["c","f","j"], target = "c"),//"c"
);