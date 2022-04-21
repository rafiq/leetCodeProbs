var combinationSum4 = function(nums, target) {
    return dfsTraversal(nums, target, new Map());
};

const dfsTraversal = (nums, remaining, memo) => {
    let count = 0;
    if (remaining === 0) {
        return 1;
    }
    if (memo.has(remaining)) {
        return memo.get(remaining);
    }
    for (let i = 0; i < nums.length; i++) {
        if (remaining - nums[i] >= 0) {
            count += dfsTraversal(nums, remaining - nums[i], memo);
        }
    }
    memo.set(remaining, count);
    return count;
}

var combinationSum4 = function(nums, target) {
    const dp = Array(target + 1).fill(0);
    dp[0] = 1;

	// for each target sum, find the number of combinations possible
    for(let i = 1; i <= target; ++i) {
        nums.forEach(num => {
            if(i >= num) {
                dp[i] += dp[i - num];
            }
        })
    }
    return dp[target];
};

