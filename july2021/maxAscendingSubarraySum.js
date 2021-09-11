/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxAscendingSum = function(nums) {
    let max = -1
    let currMax = 0

    for (let i = 0; i < nums.length; i++) {
        currMax += nums[i]

        if (nums[i] >= nums[i + 1] || !nums[i + 1]) {
            max = Math.max(currMax,max)
            currMax = 0
        }
    }
    return max
    // let count=0,max=-1;
    // for(let i=0;i<nums.length;i++){
    //     count+=nums[i];
    //     if(nums[i]>=nums[i+1] || !nums[i+1]){
    //         max = Math.max(count,max);
    //         count=0
    //     }
    // }
    // return max;
};
console.log(
    maxAscendingSum([10,20,30,5,10,50]),//65
    maxAscendingSum([12,17,15,13,10,11,12]),//33
)