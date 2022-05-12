/**
 * @param {string} s
 * @return {number}
 */
 var countSubstrings = function(s) {
    if (s.length === 0) return 0;
    let count = 0;

    const isPali = (start,end) => {
        while (start <= end) {
            if (s[start] !== s[end]) {
                return false
            }
            start++
            end--
        }
        return true
    }

    for (let i = 1; i < s.length; i++) {
        for (let j = 0; j < i; j++) {
            if (isPali(s.slice(i,j))) {
                count++
            }
        }
    }

    return count;
    // return isPali(0,s.length - 1)

    let count = 0, n = s.length;
    const dp = Array(n);
    for (let d = 0; d < n; d++) {
        dp[d] = Array(n).fill(false);
    }

    for (let d = 0; d < n; d++) {
        for (let i = 0; i+d < n; i++) {
            let j = i + d;
            if (s[i] === s[j]) {
                dp[i][j] = (i+1 >= j-1) ? true : dp[i+1][j-1];
                if (dp[i][j]) count++;
            }
        }
    }
    //console.log(dp);
    return count;


};
console.log(
    countSubstrings("aaa")
);

var countSubstrings = function(s) {
    let res = 0;
    for(let i=0; i<s.length; i++) {
        const size1 = getPalindromSize(s, i, i);
        const size2 = getPalindromSize(s, i, i+1);
        res += size1+size2;
    }
    return res;
};
function getPalindromSize(str, start, end) {
    let count = 0;
    let l = start;
    let r = end;
    while(l>=0 && r<str.length && str.charAt(l) === str.charAt(r)) {
        count++;
        l--;
        r++;
    }
    return count;
}