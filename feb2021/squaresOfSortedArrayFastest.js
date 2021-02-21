// This fastest answer uses the two pointer technique and a for loop to push the smaller number to a new array.

var sortedSquares = function(nums) {


    const result = Array(nums.length)
    let left = 0
    let right = nums.length -1
    for(let i = result.length-1; i >= 0; i--){
        if(nums[right] >= Math.abs(nums[left])) {
            result[i] = nums[right] ** 2
            right--
        }
        else if(Math.abs(nums[left]) >  nums[right]) {
            result[i] = nums[left] ** 2
            left++
        }
    }
    return result
};

// Another one
var sortedSquares = function (nums) {
    return nums
      .map((num) => Math.sign(num) * num)
      .sort((a, b) => a - b)
      .map((num) => num ** 2);
  };