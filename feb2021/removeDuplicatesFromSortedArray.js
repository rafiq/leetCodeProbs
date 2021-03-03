/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length === 0 ) {
        return 0;
    }

    let p1 = 0;

    for (let p2 = 1; p2 < nums.length; p2++) {
        if (nums[p1] !== nums[p2]) {
            p1++;
            nums[p1] = nums[p2]
        }
    }
return p1 + 1;
    // for (let i = nums.length - 1; i >= 0; i--) {
    //     // if (nums.indexOf[i] !== nums.lastIndexOf[i] )
    //     //     nums.splice(i,1);
    //     // let index = nums.indexOf
    //     if (array[i] === number) {
    //         array.splice(i, 1);
    // }

    // nums.filter(num => num === num)
    // The below method did work, but it returned a new array and this question is asking for in place removal.
    // nums.filter(onlyUnique)
    return nums.length;
};
function splice(arr, val) {
    for (var i = arr.length; i--;) {
      if (arr[i] === val) {
        arr.splice(i, 1);
      }
    }
  }
// function onlyUnique(value, index, self) {
//     return self.indexOf(value) === index;
//   }

console.log(
    removeDuplicates([1,1,2]),//2
    removeDuplicates([0,0,1,1,1,2,2,3,3,4]),//5
)