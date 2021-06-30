// This code was so close to my original code, that I had to refactor my code to fit it. I was only missing the temp = 0 and I used arrays and arrays.length which added unnecessary complexity.
var findMaxConsecutiveOnes = function(nums) {

    let max = 0;
    let groupMax = 0;
    let length = nums.length;
    for (let i = 0; i < length; i++) {
        if (nums[i] == 1) {
            groupMax = groupMax + 1;
           if (groupMax > max) { max = groupMax; }
        } else {
            groupMax = 0;
        }
    }
    return max;
};
// The answer below is not the fastests but I like how they used the Math.max instead of a if statement
var findMaxConsecutiveOnes = function(arr) {
    let max = 0
    let max1 = 0
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == 1){
            max1++
        }
        else{
            max = Math.max(max,max1)
            max1 = 0
        }
    }

    return Math.max(max,max1)
};