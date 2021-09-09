/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var nextGreaterElement = function(nums1, nums2) {
    let result = []

   for (let j = 0; j < nums1.length; j++) {
       let startingIndex = nums2.indexOf(nums1[j])
       if (startingIndex === -1) result.push(-1)

       for (let i = startingIndex; i < nums2.length; i++) {
           if (nums2[i] > nums1[j]) {
               result.push(nums2[i])
               break
            }
            if (i === nums2.length - 1) result.push(-1)
        }
    }
    return result
}
console.log(
    nextGreaterElement([4,1,2], [1,3,4,2]),// [-1,3,-1]
    nextGreaterElement([2,4], [1,2,3,4]),// [-1,3,-1]
)