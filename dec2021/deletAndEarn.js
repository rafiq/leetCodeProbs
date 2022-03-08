var deleteAndEarn = function(nums) {
    const n = 1001;
    const counts = new Array(n).fill(0);

    for (const num of nums) counts[num]++;

    const dp = new Array(n).fill(0);
    dp[1] = counts[1];

    for (let i = 2; i < n; i++) {
        const points = counts[i] * i;
        dp[i] = Math.max(dp[i - 2] + points, dp[i - 1]);
    }

    return dp[n - 1];
}


var deleteAndEarn = function(nums) {
    let ans = 0;
    let valueIfTaken = {};

    for(let i = 0; i < nums.length; i++) {
        if(typeof valueIfTaken[nums[i]] === 'undefined') {
            valueIfTaken[nums[i]] = 0;
        }

        valueIfTaken[nums[i]] += nums[i];
    }

    let maxIfPreviousTaken = 0;
    let maxIfPreviousSkipped = 0;

    for (let j = 0; j <= 10000; j++) {
        if(typeof valueIfTaken[j] === 'undefined') {
            valueIfTaken[j] = 0;
        }

        let maxIfCurrentTaken = maxIfPreviousSkipped + valueIfTaken[j];
        let maxIfCurrentSkipped = Math.max(maxIfPreviousSkipped, maxIfPreviousTaken);
        maxIfPreviousTaken = maxIfCurrentTaken;
        maxIfPreviousSkipped = maxIfCurrentSkipped;
    }

    return Math.max(maxIfPreviousTaken, maxIfPreviousSkipped);

};


