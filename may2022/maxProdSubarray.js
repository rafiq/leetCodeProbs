var maxProduct = function(nums) {
    var prevMin = nums[0];
    var prevMax = nums[0];

    var result = nums[0];

    for (var i = 1; i < nums.length; i++) {
        var min, max;
        if (nums[i] == 0) {
            min = max = 0;
        } else if (nums[i] > 0) {
            min = Math.min(nums[i], prevMin * nums[i]);
            max = Math.max(nums[i], prevMax * nums[i]);
        } else {
            min = Math.min(nums[i], prevMax * nums[i]);
            max = Math.max(nums[i], prevMin * nums[i]);
        }
        result = Math.max(result, max);
        prevMax = max;
        prevMin = min;
    }

    return result;
};

class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        if len(nums) == 0:
            return 0

        max_so_far = nums[0]
        min_so_far = nums[0]
        result = max_so_far

        for i in range(1, len(nums)):
            curr = nums[i]
            temp_max = max(curr, max_so_far * curr, min_so_far * curr)
            min_so_far = min(curr, max_so_far * curr, min_so_far * curr)

            max_so_far = temp_max

            result = max(max_so_far, result)

        return result