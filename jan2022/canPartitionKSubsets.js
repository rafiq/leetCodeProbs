/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
 var canPartitionKSubsets = function(nums, k) {
    let sum =  nums.reduce((a,b) => a + b,0)
    let used = Array(nums.length).fill(false);
    let target = sum / k;

    if (sum % k) return false;
    nums.sort((a,b) => b - a);

    const backtrack = (i, k, subsetSum) => {
        if (k == 0) return true;
        if (subsetSum === target) {
            return backtrack(0, k - 1, 0);
        }

        for (i = 0; i < nums.length; i++) {
            if (used[i] || subsetSum + nums[i] > target) {
                continue
            }
            used[i] = true

            if (backtrack(i + 1, k, subsetSum + nums[i])) {
                return true
            }
            used[i] = false
        }
        return false
    }

    return backtrack(0, k, 0)
};

console.log(
    canPartitionKSubsets([4,3,2,3,5,2,1],  4),
    canPartitionKSubsets([1,2,3,4],  3),
    canPartitionKSubsets([15,3557,42,3496,5,81,34,95,9,81,42,106,71]
        ,11),
);

// var canPartitionKSubsets = function(nums, K) {
    const S = nums.reduce((a,b)=>a+b);
    if (S % k!== 0) {
        return false;
    }
    nums.sort((a,b) => b - a);

    const target = S/k;
    const V = new Array(nums.length).fill(false);
    const dfs = (n, sum, k) => {
        if (k== 1) {
            return true;
        }
        if (sum == 0) {
            return dfs(0, target, k-1);
        }
        for(let i=n;i<nums.length;i++) {
            if (V[i] || sum - nums[i] < 0) continue;
            V[i] = true;
            if (dfs(i+1, sum-nums[i], k)) {
                return true;
            }
            V[i] = false;

        }
        return false;
    }

    return dfs(0, target, k);
// };
// Bucket [back tracking]

// var canPartitionKSubsets = function(nums, K) {
//     const S = nums.reduce((a,b)=>a+b);
//     if (S % K !== 0) {
//         return false;
//     }
//     nums.sort((a,b)=>b-a);
//     const target = S/K;
//     const B = new Array(K).fill(target);
//     const dfs = (n) => {
//         if (n==nums.length) {
//             return bucket.reduce((a,b) => a && b==0, true);
//         }
//         for(let i=0;i<B.length;i++) {
//             if (B[i]-nums[n] < 0) {
//                 continue;
//             }
//             B[i] -= nums[n];
//             if (dfs(n+1)) {
//                 return true;
//             }
//             B[i] += nums[n];
//         }
//         return false;
//     }

//     return dfs(0);
// }
