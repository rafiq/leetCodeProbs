/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    // let result = [];
    // let test = strs[0];

    // strs.forEach(word => {
    //     let j = 0;
    //     while(test[j] === word[j] || j !== word.length - 1) {
    //         j++
    //     }
    //     console.log(j)
    //     result.push(word.slice(0,(j - 1)))
    // })
    // return result;
    // if (!strs.length) return "";
    // let prefix = "";
    // for (let i = 0; i < strs[0].length; i++) {
    //     for (let j = 0; j < strs.length-1; j++) {
    //         console.log(j,i)
    //         if (strs[j][i] !== strs[j+1][i]) return prefix;
    //     }
    //     prefix += strs[0][i];
    // }
    // return prefix;

    let l = 0;
    strs = strs.sort((a,b) => a.length - b.length)
    while (l < strs[0].length) {
        let c = strs[0][l];
        for(let s of strs) {
            if (s[l] != c) return s.substr(0, l);
        }
        l++;
    }
    return strs[0];
};
console.log(
    longestCommonPrefix(["flower","flow","flight"]),//"fl"
    )
    // for (let i = 0; i < word[i].length; i++) {
    //     if (test[i] === word[i]) {

    //         result += word[i];
    //     } else {
    //         continue
    //     }
    // }