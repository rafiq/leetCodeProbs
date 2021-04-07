/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
 var shuffle = function(nums, n) {
    let result = [];
    let splitArray = [];
    for (let i = 0; i < nums.length; i++) {
        splitArray.push(nums.slice(i * n,i * n + n))
    }
    for (let i = 0; i < splitArray[0].length; i++) {
        result.push(splitArray[0][i])
        result.push(splitArray[1][i]);
    }
    return result;
};
console.log(
    shuffle([2,5,1,3,4,7],3),//[2,3,5,4,1,7]
)
// Very cool way of doing this.
var shuffle = function (nums, n) {
    if (nums.length !== 2 * n) throw new Error("invalid input");
    const ret = new Array(n * 2).fill(0);
    for (let i = 0; i < n; i++) {
      ret[2 * i] = nums[i];
      ret[2 * i + 1] = nums[i + n];
    }
    return ret;
  };

  var shuffle = function(nums, n) {
    let array = []
    for (i = 0; i < n; i++) {
        array.push(nums[i]);
        array.push(nums[i + n])
    }
    return array

};