/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSumDivThree = function(nums) {
    nums.sort((a, b) => b - a);
    let sum = nums.reduce((cur,i) => cur + i);
    let max = 0

    function backtracking(remaining, index) {
        if(index >= nums.length) return
        if(remaining < nums[index] || max > remaining) return
        if((remaining % 3) == 0) {
           max = Math.max(max, remaining)
         }
        if((remaining - nums[index]) % 3 == 0) {
            max = Math.max(max, remaining - nums[index]);
        }
      return  backtracking(remaining, index + 1) || backtracking(remaining - nums[index], index + 1)
    }
    backtracking(sum, 0)
    return max
    };
console.log(
    maxSumDivThree()
);