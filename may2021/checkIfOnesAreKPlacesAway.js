/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
 var kLengthApart = function(nums, k) {

    // return !nums.join("").match(/[0]+/gi).some(el => el.length < k)
    let count = k;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) count++;
        if (nums[i] === 1) {
            if (count < k) return false;
            else count = 0;
        }
    }

    return true;
};
console.log(
    kLengthApart([1,0,0,0,1,0,0,1],  2),//true
    kLengthApart([0,1,0,1],  1),//true
    kLengthApart([0,1,0,1],  3),//false
    kLengthApart([1,0,0,1,0,1],  2),//false
    kLengthApart([1,0,0,1,0,1],  3),//false
)

// ! Below is the fastest code and I want to explain it
var kLengthApart = function(nums, k) {
//   Create a pointer that is pointing off the array to begin with
    var p1 = -1;

    for(let i = 0; i < nums.length; i++){
        var num = nums[i];

        if(num == 1){
            // the first time there is a one in the array, set the pointer to that index.
            if(p1 == -1) p1 = i;
            // The following time that a one is seen in the array calculate if current index minus the previous pointer index is less than or equal to k, and if so, return false.
            else if((i - p1) <= k) return false;
            // If the previous if statement is not truthy, then set the pointer to the current index and keep going until the end of the array.
            else p1 = i
        }
    }

    return true;
};