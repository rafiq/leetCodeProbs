/*
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let pointer1 = m - 1;
    let pointer2 = n - 1;

    for(let i = m + n - 1; i >= 0; i--) {
        if(pointer2 < 0) {
            break;
        }
        if(nums1[pointer1] > nums2[pointer2]) {
            nums1[i] = nums1[pointer1];
            pointer1--;
        } else {
            nums1[i] = nums2[pointer2];
            pointer2--;
        }
    }
    return nums1;
};
console.log(merge([1,2,3,0,0,0],3,[2,5,6],3));
// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

// The number of elements initialized in nums1 and nums2 are m and n respectively. You may assume that nums1 has a size equal to m + n such that it has enough space to hold additional elements from nums2.

