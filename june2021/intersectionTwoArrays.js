/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersect = function(nums1, nums2) {

    let result = [];
    let [longer, short] = nums1.length > nums2.length ? [nums1,nums2] : [nums2,nums1]
    for (let i = 0; i < short.length; i++) {
        if (longer.includes(short[i])) {
            result.push(short[i]);
            longer[longer.indexOf(short[i])] = null;
            short[i] = null;
        }
    }

    return result;
};
console.log(
    intersect([4,9,5], [9,4,9,8,4]),
    intersect([1,2,2,1],  [2,2])
)

// ! I like this approach because they make a hashtable out of one array and then iterate over the other array and if the number is in the hashtable, then they just decrement and push that value into the result array.

var intersect = function(nums1, nums2) {
    // create hashtable for nums 2 <number, count>
    let counters = {};
    for (const num of nums2) {
        counters[num] = counters[num] ? counters[num] + 1 : 1;
    }

    // for every element in nums1 if it is appears in a hash table and counter > 0
    // subtract counter, add to result array
    // T O(n + m) S O(m)
    let result = [];
    for (const num of nums1) {
        if (counters[num]) {
            counters[num]--;
            result.push(num);
        }
    }

    return result;
};