/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
 var areAlmostEqual = function(s1, s2) {
    if (s1 === s2) return true;
    let count = 0;

    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) count++;
    }
    return count < 3 && s2.split("").sort().join("") === s1.split("").sort().join("");
    // return count; count < 3 &&
    // return s2.split("").sort()
};
console.log(
    areAlmostEqual("bank", "kanb"),//true;
    areAlmostEqual("kelb", "kelb"),//true;
    areAlmostEqual("abcd", "dcba"),//false;
    areAlmostEqual("aa"
    ,"ac"),//false;
)