/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var minSubsequence = function(nums) {
    // let sortedArray = nums.sort((a,b) => a - b)

    // for (let i = sortedArray.length - 1; i >= 0; i--) {
    //     if (nums[i] + nums[i - 1] > nums.slice(i - 1).reduce((acc, curr) => acc + curr)) return [nums[i], nums[i - 1]]
    // }
    // return false

    nums.sort((a,b) => a-b);
    let sum = nums.reduce((total,num) => total+num);
    let res = [], newSum = 0;
    while (sum >= newSum) {
        let x = nums.pop();
        res.push(x);
        sum -= x, newSum += x;
    }
    return res;
};

console.log(
    minSubsequence([4,3,10,9,8])
)