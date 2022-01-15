/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
    // let result = [];
    // let cache = new Set();

    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = 0; j < nums.length; j++) {
    //         for (let k = 0; k < nums.length; k++) {
    //             if (i !== j && j !== k && k !== i && nums[i] + nums[j] + nums[k] == 0) {
    //                 let value = [nums[i], nums[j] ,nums[k]].sort().join("");
    //                 cache[value] = value;
    //                 result.push([nums[i], nums[j] ,nums[k]]);
    //             }
    //         }
    //     }
    // }
    // return Object.values(cache).map(el => {

    // });
    // return result.reduce((acc,curr) => {
    //     cache[curr] ? acc : cache[curr] = curr.sort().join("");
    //     return acc;
    // })
    let res = []
    nums.sort((a,b) => a - b)
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i - 1])
            continue
        let target = -nums[i]
        let left = i + 1, right = nums.length - 1
        while (left < right) {
            if (nums[left] + nums[right] === target) {
                res.push([nums[left], -target, nums[right]])
                while (nums[left] === nums[left + 1])
                    left++
                left++
                while (nums[right] === nums[right - 1])
                    right--
                right--
            }
            else if (nums[left] + nums[right] > target)
                right--
            else
                left++
        }

    }
    return res
};
console.log(
    threeSum([-1,0,1,2,-1,-4])
);

var threeSum = function (nums) {
    nums.sort((a, b) => a - b);
    let res = [];
    for (let i = 0; i < nums.length; i++) {
      // if nums[i] > 0, nums[i] + some two numbers in nums[i+1...end] can never equal 0
      if (nums[i] > 0) {
        break;
      }
      if (i === 0 || nums[i] !== nums[i - 1]) {
        twoSum(nums, i + 1, nums.length - 1, -nums[i], res);
      }
    }
    return res;
    // T.C: O(N^2)
    // S.C: O(N)
  };

  const twoSum = (nums, low, high, target, res) => {
    while (low < high) {
      let sum = nums[low] + nums[high];
      if (sum < target) {
        low++;
      } else if (sum > target) {
        high--;
      } else {
        res.push([-target, nums[low], nums[high]]);
        low++, high--;
        // to avoid duplicate two sum
        while (low < high && nums[low] === nums[low - 1]) {
          low++;
        }
      }
    }
  };