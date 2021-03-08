/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
// var canConstruct = function(ransomNote, magazine) {
    // let set = {}
    // let sourceSet = {};

    // for (let i = 0; i < magazine.length; i++) {
    //     if (set[magazine[i]] === undefined) set[magazine[i]] = 1;
    //     else set[magazine[i]] += 1;
    // }
    // for (let letter of ransomNote) {
    //     if (sourceSet[letter] === undefined) sourceSet[letter] = 1;
    //     else sourceSet[letter]++;
    // }



    // let possibleLetters = Object.keys(set)
    // let letterValues = Object.values(set);

    // return possibleLetters.reduce(letter => {
    //     if (set[letter] > sourceSet[letter]) true;
    //     else return false;
    // });
    // return possibleLetters.reduce((acc,curr) => {
    //     for (let i = 0; i < ransomNote.length; i++) {
    //         if (ransomNote[i].includes(curr)) acc[curr] - 1;
    //     }

    //     return acc;
    // },{})
    // for (let i = 0; i < ransomNote.length; i++) {
    //     for (let j = 0; j < possibleLetters.length; j++) {
    //         if (ransomNote[i] === set[magazine[j]]) set[magazine[j]] - 1;
    //     }
    // }
    // // return ransomNote.split("").every(word => set.has(word))
    // return set;

// };
// console.log(
//     canConstruct("a", "b"),// Output: false
//     canConstruct("aa","aab"),// Output: true
// )
/* Approach: O(n), Count all of the letters in each string, adding and subtracting from the counts as we go along.
   If a count goes negative, mark it as a possible differing letter in a second hash.
   If a count goes to 0, delete it as a possible differing letter (since it has balanced out the counts with the other string).
   When we're done, there should be no entries in the negatives hash (meaning the ransom note could be fully constructed from the available letters. i.e., the substring exists within the second string.)
   The same solution is used in "Find the Difference" (find the differing letter in two strings) https://gist.github.com/primaryobjects/7655cb19be5cd43aa8d1a340f2041725
   */

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    var result = false;

    var hash = {};
    var negatives = {};

    if (magazine.length >= ransomNote.length) {
        for (var i=0; i<magazine.length; i++) {
            // Increment count for each magazine letter.
            hash[magazine[i]] = hash[magazine[i]] ? hash[magazine[i]] + 1 : 1;

            if (hash[magazine[i]] >= 0) {
                // This is a valid use of a letter.
                delete negatives[magazine[i]];
            }

            if (i < ransomNote.length) {
                // Decrement count for each used ransom note letter.
                hash[ransomNote[i]] = hash[ransomNote[i]] ? hash[ransomNote[i]] - 1 : -1;

                if (hash[ransomNote[i]] < 0) {
                    // This is a potential overuse of a letter.
                    negatives[ransomNote[i]] = 1;
                }
            }
        }

        result = Object.keys(negatives).length === 0;
    }

    return result;
};

console.log(
        canConstruct("a", "b"),// Output: false
        canConstruct("aa","aab"),// Output: true
    )