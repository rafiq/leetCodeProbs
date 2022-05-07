/**
 * @param {number[]} stones
 * @return {number}
 */
 var lastStoneWeightII = function(stones) {

    return stones.sort((a,b) => a - b)
};
console.log(
    lastStoneWeightII([31,26,33,21,40])
);

var lastStoneWeightII = function(stones) {
    const memo = new Map();
    return findMinWeight(0, 0, 0);

    function findMinWeight(index, weight1, weight2) {
        const key = `${index}#${weight1}#${weight2}`;

        // base case
        if (index == stones.length) return Math.abs(weight1 - weight2);
        if (memo.has(key)) return memo.get(key);

        const currWeight = stones[index];
        const min =  Math.min(
            findMinWeight(index + 1, weight1 + currWeight, weight2),
            findMinWeight(index + 1, weight1, weight2 + currWeight
        ));

        memo.set(key, min);
        return min;
    }
};


// Bottom Up Approach (DP)

var lastStoneWeightII = function(stones) {
    const m = stones.length;

    let sum = 0;

    for (const weight of stones) {
        sum += weight;
    }

    const half = Math.floor(sum / 2);

    const dp = [];

    for (let i = 0; i <= m; i++) {
        dp[i] = new Array(half + 1).fill(false);
        dp[i][0] = true;
    }

    let max = 0;

    for (let i = 1; i <= m; i++) {
        const weight = stones[i - 1];

        for (let j = 1; j <= half; j++) {
            const rem = j - weight;

            if (rem >= 0 && dp[i - 1][rem] == true) dp[i][j] = true;
            else dp[i][j] = dp[i - 1][j];

            if (dp[i][j] == true) max = Math.max(max, j);
        }
    }

    return sum - (2 * max);
};

var lastStoneWeight = function(stones) {
    while(stones.length > 1){
        stones.sort(function(a,b){
            return a-b
        })
        if(stones.length >= 2){
            if(stones[stones.length-1] > stones[stones.length-2]) {
                stones[stones.length-1] = stones[stones.length-1] - stones[stones.length-2]
                stones.splice(stones.length-2,1)
            }else if(stones[stones.length-2] > stones[stones.length-1]){
                stones[stones.length-2] = stones[stones.length-2] - stones[stones.length-1]
                stones.splice(stones.length-1,1)
            }
            else {
                stones.splice(stones.length-1,1)
                stones.splice(stones.length-1,1)
            }
        }

    }
    if(stones.length > 0) return stones[0]
    else return 0
};