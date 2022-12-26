/**
 * @param {number[]} nums
 * @return {number}
 */
 var numberOfArithmeticSlices = function(nums) {
    if (nums.length < 3) return 0;
    let dp = [0];
    let count = 0;
    let currDiff = Math.abs(nums[0] - nums[1]);

    for (let i = 1; i < nums.length - 1; i++) {
        let nextDiff = Math.abs(nums[i] - nums[i + 1]);
        if (currDiff === nextDiff) {
            count++;
            dp[i] = dp[i - 1] + count;
        } else {
            count = 0;
            curr = nextDiff;
        }
    }

    return dp[dp.length - 1];


    let sum = 0;

    const DFS = (arr, i) => {
        if (i < 2) return 0;
        let result = 0;

        if (arr[i] - arr[i - 1] === arr[i - 1] - arr[i - 2]) {
            result = 1 + DFS(arr,--i);
            sum += result;
        } else {
            DFS(arr,--i)
        }
        return result;
    }
    DFS(nums,nums.length);
    return sum

    if (nums.length < 2) return 0;
    let countOfSubarrays = 0;
    let start = 1;
    // let currDiff = Math.abs(nums[0] - nums[1]);
// we have to do some prefix summing here
    while (start < nums.length) {
        let nextDiff = Math.abs(nums[start] - nums[start + 1]);
        if (currDiff === nextDiff) {
            countOfSubarrays++;
        } else {
            currDiff = nextDiff;
        }

        start++;
    }

    return countOfSubarrays;

    var numberOfArithmeticSlices = function(A) {
        if (A.length < 3)
                return 0;
            var result = 0;
            var currentStartIndex = 0;
            for (var i = 1; i < A.length - 1; i++) {
                if (A[i] - A[i - 1] === A[i + 1] - A[i]) {
                    result +=  i - currentStartIndex;
                }
                else {
                    currentStartIndex = i;
                }
            }

            return result;
        };
};

console.log(
    numberOfArithmeticSlices([1,2,3,4])
);