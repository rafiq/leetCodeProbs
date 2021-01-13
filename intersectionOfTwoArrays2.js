/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// var intersect = function(nums1, nums2) {
//   let intersectedNums = [];
//   let big = [];
//   let small = [];

//   if(nums1.length > nums2.length) {
//     big = nums1;
//     small = nums2;
//   } else {
//     big = nums2;
//     small = nums1;
//   }
//   console.log(small);
//   console.log(big);

//   for(let i = 0; i < big.length; i++) {
//     if(small.includes(big[i])) {
//       intersectedNums.push(big[i]);
//     }
//   }

//   return intersectedNums;
// };

// console.log(intersect([4,9,5],[9,4,9,8,4]))  // [4,9]
var intersect = function(nums1, nums2) {
  let preprocessTarget = nums1;
  let loopTarget = nums2;

  if(nums2.length > nums1.length) {
    preprocessTarget = nums2;
    loopTarget = nums1;
  }
    const countMap = new Map();
    for(let num of preprocessTarget) {
      if(countMap.has(num)) {
        countMap.set(num, countMap.get(num) + 1)
      } else {
        countMap.set(num, 1)
      }
    }
    const result = [];

    for(let num of loopTarget) {
      if(countMap.has(num)) {
        result.push(num)

        const count = countMap.get(num)
        if(count === 1 ) {
          countMap.delete(num)
        } else {
          countMap.set(num, count - 1)
        }

      }
    }
    return result;
  }

console.log(intersect([4,9,5],[9,4,9,8,4]))  // [4,9]

// Given two arrays, write a function to compute their intersection.
