/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var anagramMappings = function(nums1, nums2) {
    let result = [];

    for (let num of nums1) {
        // console.log(nums2.indexOf(num))
        result.push(nums2.indexOf(num))
    }

    return result;
};
console.log(
    anagramMappings([12,28,46,32,50], nums2 = [50,12,32,46,28]),//[1,4,3,2,0]
);