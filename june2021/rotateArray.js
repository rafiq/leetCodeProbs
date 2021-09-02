/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var rotate = function(nums, k) {
    let count = k;
    let copyArray = nums.slice();

    // while (count) {
    //     let endElement = copyArray.slice(-1);
    //     copyArray = endElement.concat(copyArray.slice(0,-1))
    //     count--
    // }
    // return copyArray

    // let end = nums.slice(-k)
    // nums = end.concat(nums.slice(0,-k))
    // return nums;

    // let temp = 0;
    // let lastDigit = nums.length - 1;
    // while (count) {
    //     temp = nums[lastDigit];
    //     for (let i = lastDigit; i >= 1; i--) {
    //         nums[i] = nums[i - 1]
    //     }
    //     nums[0] = temp;
    //     count--;
    // }
    // // return nums

    // return k % nums.length;
    // return nums.reverse()
    for (let i = 0; i < k; i++) {
        nums.unshift(nums.pop());
    }
    // return nums;
};

console.log(
    rotate([1,2,3,4,5,6,7],3),//5,6,7,1,2, 3, 4
    rotate([-1,-100,3,99],2)//3, 99, -1, -100
)

// ! THis is a good solution which reverses the whole array which puts the k element of digits at the front of the array. Then it reversese the first k elements of digits which puts those elements in the right order. The last thing to do it to put the rest of the elements in the right order by reversing them as well.
var rotate = function(nums, k) {
    if (nums === null || nums.length === 0) {
        return;
    }
    k = k % nums.length;
    if (k === 0) {
        return;
    }
    nums.reverse();
    reverse(nums, 0, k-1);
    reverse(nums, k, nums.length - 1);
    // T.C: O(N)
    // S.C: O(1)
};

const reverse = (arr, start, end) => {
    while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++, end--;
    }
}

/*
Solution:
1. Reverse the entire array.
2. Reverse the first k elements.
3. Reverse the rest.
*/