/**
 * @param {string} s
 * @return {number}
 */
 var countGoodSubstrings = function(s) {
    let array = []

    const isDuplicate = str => {
        for (let i = 0; i < str.length; i++) {
            if (str.indexOf(str[i]) !== str.lastIndexOf(str[i])) return false
        }
        return true
    }

    for (let i = 0; i < s.length - 2; i++) {
        if (isDuplicate(s[i] + s[i + 1] + s[i + 2])) {
            array.push(s[i] + s[i + 1] + s[i + 2])
        }
    }
    return array.length
};

console.log(
    countGoodSubstrings("aababcabc"),
    countGoodSubstrings("xyzzaz"),
)