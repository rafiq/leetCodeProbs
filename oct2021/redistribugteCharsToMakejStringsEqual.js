/**
 * @param {string[]} words
 * @return {boolean}
 * find the longest word and remove a character until it is equal to the shortest
 *
 * find the length of each word
 *      if the lengths are divisble, then they are able to equal.
 *          all the lengths summed toghether should be divisble evenly by a number that is less than the length
 *      otherwise false
 *
 */
 var makeEqual = function(words) {
    // let totalLength = 0;
    // if (totalLength === words.length) return false;
    // for (let word of words) {
    //     totalLength += word.length;
    // }
    // for (let i = totalLength; i >= 0; i--) {
    //     if (totalLength % words.length === 0) return true
    // }
    // return false;

    let a = words.join("");
    let b = 0;
    let map = new Map();

    for (let i = 0; i < a.length; i++) {
        map.set(a[i], (map.get(a[i]) || 0) + 1);
    }

    for (let [key, value] of map.entries()) {
        if (value % words.length !== 0) {
            b++;
        }
    }

    return b < 1;
};
console.log(
    makeEqual(["abc","aabc","bc"]),//true;
    makeEqual(["ab","a"]),//false;
)