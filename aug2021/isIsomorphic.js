/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isIsomorphic = function(s, t) {
    if (s.length !== t.length) return false;
    let m = new Map();
    for (let i = 0; i < s.length; i++) {
        if (m.has(s[i]) && m.get(s[i]) !== t[i]) return false;
        else m.set(s[i],t[i]);
    }
    return new Set([...m.values()]).size === m.size;

    // return s
};
console.log(
    isIsomorphic( "egg", "add")
)