/**
 * @param {number[]} nums
 * @return {SparseVector}
 */
 var SparseVector = function(nums) {
    this.nums = nums;
};

// Return the dotProduct of two sparse vectors
/**
 * @param {SparseVector} vec
 * @return {number}
 */
SparseVector.prototype.dotProduct = function(vec) {
    let result = 0;

    this.nums.forEach((el,idx) => {
        result += el * vec.nums[idx];
        // console.log(vec[idx])
    })
    // console.log(vec.nums)
    return result;
};

// Your SparseVector object will be instantiated and called as such:
let v1 = new SparseVector([1,0,0,2,3]);
let v2 = new SparseVector([0,3,0,4,0]);
let ans = v1.dotProduct(v2);

console.log(
    ans,
);