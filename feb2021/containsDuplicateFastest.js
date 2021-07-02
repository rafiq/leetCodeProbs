// Below is the fastest answer which uses a has table and iterating through that hash table to check if any are undefined or not there.

const containsDuplicate = nums => {
    const hash = new Map();

    for (const n of nums) {
      if (hash.get(n) !== undefined) return true;
      hash.set(n, true);
    }

    return false;
  };

//   Below is the second fastest answer and it is much more readable than the fastest to me at this time (Feb 2021).
// This almost reminds me of the delete any consecutive duplicates because this one is first sorted, then a for loop is created to loop through the array numbers to check if any consecutive numbers are the same. If they are, then it returns true "there is a duplicate".

function ?????????(nums) {
     nums = nums.sort((a, b) => a - b);
     for (let i = 0; i < nums.length - 1; i++) {
         if (nums[i] === nums[i+1]) return true;
     }
     return false;
 };
// var containsDuplicate = function(nums) {
//      nums = nums.sort((a, b) => a - b);
//      for (let i = 0; i < nums.length - 1; i++) {
//          if (nums[i] === nums[i+1]) return true;
//      }
//      return false;
//  };

//  The one below is the third fastest one and is readable as well. Basically, this is making a new Set from the array which by definition will not allow duplicates, so then the resulting array length will be less than the original array length if there are duplicates in the original array. Then the true is returned. I do not understand why this array has the empty arr initialized?
var containsDuplicate = function(nums) {
    let arr = []
        if ([...(new Set(nums))].length === nums.length) return false
        return true
    }