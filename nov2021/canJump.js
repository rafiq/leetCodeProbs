/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var canJump = function(nums) {
    // let end = nums.length - 1;

    // const DFS = (root) => {
    //     if (!root) return;

    //     let queue = [];

    //     while (queue) {
    //         let curr = queue.pop();
    //         for (let child in root) {
    //             queue.push(child);
    //         }

    //     }

    // }
    let lastValidIndex = nums.length - 1;

    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] + i >= lastValidIndex) {
            lastValidIndex = i;
        }
    }
    return lastValidIndex === 0;


    //  let reach = 0;
    // for (let i = 0; i < nums.length; i++) {
    //     if (i > reach)
    //         return false;
    //     reach = Math.max(reach, i + nums[i]);

    // }
    // return true
};
console.log(
    canJump([2,3,1,1,4]),//
);