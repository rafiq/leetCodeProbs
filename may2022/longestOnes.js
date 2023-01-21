

var longestOnes = function(A, K) {
    let i = 0, j = 0, len = 0, res = 0;
    while (j < A.length) {
        if (A[j] === 0 && K) len++, K--, j++;
        else if (A[j] === 1) len++, j++;
        else {
            res = Math.max(res, len);
            if (A[i] === 0) K++;
            i++, len--;
        }
    }
    return Math.max(res, len);
    // Time Complexity: O(n)
    // Space Complexity: O(1)
};

const longestOnes = function(nums, k) {
    let maxLength = 0, windowStart = 0, flipCount = 0;
    for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
      if(nums[windowEnd] === 0) {
        flipCount++
      }
      if(flipCount > k) {
        if(nums[windowStart] === 0) {
          flipCount--
        }
        windowStart++
      }

      if(flipCount <= k) {
        maxLength = Math.max(maxLength, windowEnd - windowStart+1)
      }
    }
    return maxLength
  };
// `my attempt

var longestOnes = function(nums, k) {
    let start = 0;
    let hashmap = {}
    let max = 0;
    let len = 0;

    for (let end = 0; end < nums.length; end++) {
        let char = nums[end];

        hashmap[char] = hashmap[char] + 1 || 1;

        max = Math.max(hashmap[char], max);

        while (end - start + 1 - max > k) {
            hashmap[char]--;
            start++;
        }
        len = Math.max(len, end - start + 1)
    }


    return len;
};