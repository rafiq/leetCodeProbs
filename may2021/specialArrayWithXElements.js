/**
 * @param {number[]} nums
 * @return {number}
 */
 var specialArray = function(nums) {
    let result = -1;
    nums = nums.sort((a,b) => a - b)
    for (let i = 0; i < nums.length; i++) {
        let count = nums.length - i;
        if (nums[i] >= count) {
            let totalNums = nums.filter(el => el >= count)
                if (totalNums.length > count) {
                    continue;
                } else {
                    result = count
                    return result;
                }
        }
    }
    return -1;
};
console.log(
    specialArray([3,5]),//2
    specialArray([0,4,3,0,4]),//3
    specialArray([3,6,7,7,0]),//-1
    specialArray([0,0]),//-1
)