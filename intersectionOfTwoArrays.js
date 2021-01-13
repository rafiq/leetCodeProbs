/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */


 var intersection = function(nums1, nums2) {
  let firstSet = new Set();


  for(let num of nums1) {
firstSet.add(num);
  }

let intersection = new Set();

  for(let num of nums2) {
      if(firstSet.has(num)) {
        intersection.add(num);
      }
  }
return Array.from(intersection)

 }
//   let intersection = [];
//   let big = [];
//   let small = [];

//   if (nums1 > nums2 ){
//     let big = nums1 ;
//     let small = nums2;
//   } else {
//     let big = nums2;
//     let small = nums1;
//   }

//   for(let i = 0; i < big.length; i++) {
//     let count = small.length - 1;
//     while(small >= 0) {
//       if(i === small[count]) {
//         intersection.push(i);
//         count--;
//       }
//       return intersection;
//     }
//   }


//     // return intersection;
// };

// console.log(intersection([4,9,5], [9,4,9,8,4])); //[9,4]
// console.log(intersection([1,2,2,1], [2,2])); //[2]
//  var intersection = function(nums1, nums2) {
//   let intersection = [];
//   let big = [];
//   let small = [];

//   if (nums1 > nums2 ){
//     let big = nums1 ;
//     let small = nums2;
//   } else {
//     let big = nums2;
//     let small = nums1;
//   }

//   for(let i = 0; i < big.length; i++) {
//     let count = small.length - 1;
//     while(small >= 0) {
//       if(i === small[count]) {
//         intersection.push(i);
//         count--;
//       }
//       return intersection;
//     }
//   }


//     // return intersection;
// };

// console.log(intersection([4,9,5], [9,4,9,8,4])); //[9,4]
// console.log(intersection([1,2,2,1], [2,2])); //[2]

// // Given two arrays, write a function to compute their intersection.