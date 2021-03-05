// This is a pretty smooth answer which iterates over the array and once it finds a max greater than -infinity it sets that equal to the first max and moves down the other maxes, then then next max that is less than the first but greater than -infinity is set to the second max. Finally, the third max is set to the next element that is less than the second and first max and third max. Then it uses a comparison statement that either returns max3 or max 1 if all the above is not satisified.

var thirdMax = function(nums) {
    let max1 = -Infinity, max2 = -Infinity, max3 = -Infinity;
    for(let i=0; i<nums.length; i++){
      if(nums[i] > max1){
        max3 = max2;
        max2 = max1;
        max1 = nums[i]
      }
      if(nums[i] > max2 && nums[i] < max1){
        max3 = max2;
        max2 = nums[i]
      }
      if(nums[i] < max2 && nums[i] > max3){
        max3 = nums[i]
      }
    }
    return (max3 !== -Infinity && max3 < max2 && max3 < max1) ? max3:max1;
  };

//   The below was clever, because they did away with the duplicates by putting the array into a set which does not allow duplicates. Very smart.
var thirdMax = function (nums) {
    nums = [...new Set(nums)].sort((a, b) => { return b - a });

    console.log(nums)

    if (nums.length >= 3) {
      return nums[2];
    }
    else if (nums.length == 2) {
      return nums[0];
    }
    else if (nums.length == 1) {
      return nums[0];
    }
  };