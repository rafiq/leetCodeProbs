var characterReplacement = function(s, k) {
    let i = 0
    let max = 0
    let len = 0
    let map = {}
    for(let j=0; j<s.length; j++){
        const c = s[j]
        map[c]=(map[c]||0)+1
        max=Math.max(map[c], max)
        while(j-i+1-max>k) map[s[i++]]--;
        len = Math.max(len, j-i+1)
    }
    return len
};

//so we want to replace the letter K times to get the maximum longest substring of the same letter
//
//optimal way: is to take a particular window of letters(in chunnk you can slowly add to)
//in that window of letters replace the least frequently occuring letter with the more frequently occuring letters till 'K' allows
//formula: take the length of window - count of the most frequent letter --> gives us the amount we need to replace in that particular window
//we can keep replacing until the replacement value is equal or less than 'K'
//keep track of the maximum length then
//
//for the steps:
//so in that particular window of letters, we need find the maximum occuring letter, and least occuring letter
//(we can do so by keeping track of letter count in a Map)
//to actually keep track of the maximum occuring letter, we can check for the letter count we stumble upon while iterating and comparing with 'max'
//then since 'substring' is mentioned, we can find a way to use Sliding Window
//if the replacement value goes over 'K', we shrink the window and find other possible values
var characterReplacement = function(s, k) {
    let left = 0;
    let right = 0;
    let maxLen = -Infinity;
    let map = new Map();
    let maxOccuringLetterCount = 0;

    while(right < s.length){
        if(map.get(s[right])){
            map.set(s[right], map.get(s[right])+1);
        }else{
            map.set(s[right], 1);
        }

        //checking for the maximum occuring letter(everytime we iterate within that particular window)
        maxOccuringLetterCount = Math.max(maxOccuringLetterCount, map.get(s[right]));

        //window length - most frequent letter count --> gives us the amount we need to replace in that particular window
        while((right-left+1)-maxOccuringLetterCount  > k){
            if(map.get(s[left]) === 1){
                map.delete(s[left]);
            }else{
                map.set(s[left], map.get(s[left])-1);
            }

            left++;
        }

        maxLen = Math.max(maxLen, right-left+1);
        right++;
    }
    return maxLen === -Infinity? 0: maxLen;
};


var characterReplacement = function(s, k) {
    let mostFreq = -Infinity, max = -Infinity;
    let arr = new Array(26).fill(0);
    let start = 0;
    for (let end = 0; end < s.length; end++) {
        let idx = s.charCodeAt(end) - 65;
        arr[idx] += 1;
        mostFreq = Math.max(mostFreq, arr[idx]);
        let charsToModify = (end-start+1) - mostFreq;
        // validate window (so that we can turn the current window into substring w/
        // the same characters using k modifications)
        // we simply need to advance `start` pointer by 1 to validate window
        // Why? window size - mostFreq = # of characters to modify, right?
        // window size just got smaller by, so # of characters to modify also just got
        // smaller by 1. Most freq value may stay unchanged or decrease by 1. There is
        // no chance that it increases by reducing window size hence there is no need to
        // worry about it
        if (charsToModify > k) {
            let idx2 = s.charCodeAt(start) - 65;
            arr[idx2] -= 1;
            start++;
        }
        // Keep track of the maximum valid substring length
        max = Math.max(max, end-start+1);
    }
    return max;
    // T.C: O(N)
    // S.C: O(1)
};

