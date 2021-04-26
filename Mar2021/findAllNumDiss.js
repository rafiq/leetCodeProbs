/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let newArray = [];

    for (let i = 1; i <= nums.length; i++) {
        if (!nums.includes(i)) {
            newArray.push(i);
        }
    }

    return newArray;
};
console.log(

findDisappearedNumbers([4,3,2,7,8,2,3,1]),//[5,6]
findDisappearedNumbers([1,1]),//[2]
)