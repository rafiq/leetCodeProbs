/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var decompressRLElist = function(nums) {
    let result = [];

    for (let i = 0; i < nums.length; i += 2) {
        let countDown = nums[i];

        while (countDown) {
            result.push(nums[i + 1]);
            countDown--
        }
    }
    return result;
};
console.log(
    decompressRLElist([1,1,2,3]),//[1,3,3]
    decompressRLElist([1,2,3,4]),//[1,3,3]
)