/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    let prefix = ""
    if(strs === null || strs.length === 0) return prefix

    for (let i=0; i < strs[0].length; i++){
        const char = strs[0][i]
        for (let j = 1; j < strs.length; j++){
            if(strs[j][i] !== char) return prefix
        }
        prefix = prefix + char
    }

    return prefix
    // let base = strs[0]
    // if (strs.length === 0) return "";
    // strs.forEach(el => {
    //     if (getSlices(base,el)) {
    //         base = getSlices(base,el)
    //     } else {
    //         return base = "";
    //     }
    // })
    // return base
};
function getSlices(haystack,needle) {
    for (let i = needle.length; i >= 0; i--) {
        if (haystack.match(needle.slice(0,i))) {
            return needle.slice(0,i)
        }
    }
    return false;
}
console.log(
    longestCommonPrefix(["reflower","flow","flight"]),// ""
    longestCommonPrefix([]),// ""
)