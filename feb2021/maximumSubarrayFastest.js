// Here the fastest answer is essentially the same as the answer that I gave except for the fact that it is using if statements instead of the math.max method used in mine.

var maxSubArray = function(nums) {

    let maxSum = nums[0]
    let tempSum = maxSum
    for(let i = 1; i < nums.length; i++){

        if(tempSum < 0) {
            tempSum = nums[i]
        } else {
            tempSum += nums[i]
        }

        if(tempSum > maxSum){
            maxSum = tempSum
        }
    }

    return maxSum
};



// Another answer which uses math.max at the end.
var maxSubArray = function(nums) {
    var maxSum = -Infinity;
    var curSum = -Infinity;
    for (var i = 0; i < nums.length; i++) {
        if (curSum < 0) {
            curSum = nums[i];
        } else {
            curSum += nums[i];
        }
        maxSum = Math.max(maxSum, curSum);
    }
    return maxSum;
}; // n