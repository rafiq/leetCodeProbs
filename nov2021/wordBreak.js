/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
 var wordBreak = function(s, wordDict) {
    // create recursive function

    // call it

    // const verifyBreak = (s,dic,start,memo) => {
    //     if (start === s.length) return true;
    //     if (!memo[start] !== undefined) memo[start];

    //     let end = start + 1;
    //     for (; end <= s.length; end++) {
    //         let guess = s.slice(start,end);
    //         if (dic.includes(guess) && verifyBreak(s,dic,end,memo)) {
    //             return memo[start] = true;
    //         }
    //     }

    //     return memo[start] = false;
    // }
    // return verifyBreak(s,wordDict,0,[]);

    const dict = new Set(wordDict);

    const memo = new Map();
    const wb = (start) => {
        if(start === s.length) {
            return 1;
        }
        if(memo.has(start)) {
            return !!memo.get(start);
        }
        for(let end = start+1; end <= s.length; end++) {
            if(dict.has(s.slice(start, end)) && wb(end)) {
                memo.set(start, true);
                return true;
            }
        }
        memo.set(start, false);
        return false;
    };
    return wb(0);
};
console.log(
    wordBreak("catsandog", wordDict = ["cats","dog","sand","and","cat"]),//false
    wordBreak("applepenapple", wordDict = ["apple","pen"]),//false
);