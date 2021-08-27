/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    let mapS = s.split("").reduce((acc,curr) => {
        acc[curr] ? acc[curr]++ : acc[curr] = 1;
        return acc;
    },{})
    let mapT = t.split("").reduce((acc,curr) => {
        acc[curr] ? acc[curr]++ : acc[curr] = 1;
        return acc;
    },{})
    let keys = Object.keys(mapT);
    for (let key of keys) {
        if (mapT[key] !== mapS[key]) return false
    }
    return true;
};
console.log(
    isAnagram("anagram", "nagaram"),//true;
    isAnagram("rat","car"),//false
    isAnagram("a"
    ,"ab"),//false
)