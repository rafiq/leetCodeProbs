/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
 var createTargetArray = function(nums, index) {

    let result = [];

     index.forEach((el,idx) => {
        result.splice(el,0,nums[idx])
    })
    return result
};
console.log(
    createTargetArray([0,1,2,3,4],[0,1,2,2,1]),//[0,4,1,3,2];
    createTargetArray([1,2,3,4,0],[0,1,2,3,0]),// [0,1,2,3,4])
)