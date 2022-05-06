/**
 * @param {number[]} nums
 * @return {number}
 */
 var findNumberOfLIS = function(nums) {
    // let dp = Array(nums.length).fill(1);

    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = 0; j < i; j++) {
    //         if (nums[i] < nums[j] && dp[i] >= dp[j]) {
    //             dp[i] = Math.max(dp[j] + 1,dp[i])
    //         }
    //     }
    // }

    // let longest = Math.max(...dp);
    // return  dp.filter(x => x === longest).length
    // return Math.max(...dp)

    if (nums === null || nums.length === 0) {
        return 0;
    }

    let dp = new Array(nums.length);
    let freq = new Array(nums.length);
    for (let i = 0; i < nums.length; i++) {
        let lenOfLIS = 1;
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                lenOfLIS = Math.max(lenOfLIS, dp[j] + 1);
            }
        }

        // let freqAtI = 0
        // for (let j = 0; j < i; j++) {
        //     if (nums[j] < nums[i] && dp[j] + 1 === lenOfLIS) {
        //         freqAtI += freq[j];
        //     }
        // }

        dp[i] = lenOfLIS;
        // freq[i] = freqAtI === 0 ? 1 : freqAtI;
    }

    // let maxLen = Math.max(...dp);
    // let maxFreq = 0;

    // for (let i = 0; i < dp.length; i++) {
    //     if (dp[i] === maxLen) {
    //         maxFreq += freq[i];
    //     }
    // }
    let longest = Math.max(...dp);
    return  dp.filter(x => x === longest)
    // return dp;
    // T.C: O(N^2)
    // S.C: O(N)
};
console.log(
    findNumberOfLIS([1,3,5,4,7]),
    findNumberOfLIS([2,2,2,2,2])
);