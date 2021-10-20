/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var findMaxAverage = function(nums, k) {
    // let max = -Infinity;

    // for (let i = 0; i < nums.length - k; i++) {
    //     let window = nums.slice(i,i + k)
    //     if (window.length === k)  {
    //         let avg = window.reduce((acc,curr) => acc + curr) / k;
    //         if (avg > max) max = avg;
    //     }
    // }
    // return max;
    let res = Number.NEGATIVE_INFINITY;
    for (i = 0; i <= nums.length-k; i++) {
        let sum = 0;
        for (j = 0; j < k; j++) {
            sum += nums[i+j];
        }
        if (sum/k > res) res = sum/k;
    }
    return res;
};
console.log(
    findMaxAverage([1,12,-5,-6,50,3], 4),
    findMaxAverage([5],  1),
)