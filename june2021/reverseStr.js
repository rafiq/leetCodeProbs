/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
 var reverseString = function(s) {
    let p2 = s.length - 1;

    for (let i = 0; i < p2; i++) {
        [s[i],s[p2]] = [s[p2], s[i]]
        p2--
    }
    return s;
};
console.log(
    reverseString(["h","e","l","l","o"])
)