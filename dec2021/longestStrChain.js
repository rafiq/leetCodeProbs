/**
 * @param {string[]} words
 * @return {number}
 */
 var longestStrChain = function(words) {
    if (words === null || words.length === 0) {
        return 0;
    }
    // We need array sorted in ascending order of word length in order to ensure that
    // previous word has a chance of being a predecessor of current word
    words.sort((a,b) => a.length - b.length);

    // dp[i] is the maximum length of word chain ending at index i
    let dp = new Array(words.length);

    // we need to check two things for a word to be a predecessor of another word
    // 1. word is exactly one character less
    // 2. word is a subsequence (every character in it occurs in another word)
    for (let i = 0; i < words.length; i++) {
        let max = 1;
        for (let j = 0; j < i; j++) {
            if (words[i].length - words[j].length === 1 &&
                isSubsequence(words[j], words[i])) {
                max = Math.max(max, dp[j] + 1);
            }
        }
        dp[i] = max;
    }
    return Math.max(...dp);
    // T.C: O(N^2)
    // S.C: O(N)
};

const isSubsequence = (shorter, longer) => {
    let idx1 = 0, idx2 = 0, insert = 0;
    while (idx1 < shorter.length && idx2 < longer.length) {
        if (shorter[idx1] !== longer[idx2]) {
            insert++;
            idx2++;
        } else {
            idx1++, idx2++;
        }
        if (insert > 1) {
            return false;
        }
    }
    return true;
    // T.C: O(1) thanks to this constraint: 1 <= words[i].length <= 16
}
console.log(
    longestStrChain()
);