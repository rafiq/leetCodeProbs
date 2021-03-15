/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {

    // This was my first solution attempt which failed because of the fact that sometimes the unique value was at the end of the array which made this return the
    // if (nums.length === 1) return nums[0];
    // for (let i = 0; i < nums.length; i++) {
    //     if (nums.indexOf(nums[i]) !== nums.lastIndexOf(nums[i])) return nums[i];
    // }

    let unique = nums.filter((v, i) => nums.indexOf(v) === nums.lastIndexOf(v));
    return unique;
    // let sortedArray = nums.slice().sort();

    // for (let i = 0; i < sortedArray.length; i++) {
    //     if (sortedArray[i + 1] === sortedArray[i]) sortedArray.splice(i,i + 1);
    // }
    // return sortedArray;

    // let dupArr = [];
    // let uniqueArr = [];

    // while (sortedArray.length > 0) {
    //     if (sortedArray)
    //     sortedArray.shift(sortedArray)
    // }

};

 console.log(
    singleNumber([2,2,1]),//1
    singleNumber([4,1,2,1,2]),//4
    singleNumber([1]),//1

 )