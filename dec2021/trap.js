/**
 * @param {number[]} height
 * @return {number}
 */
 var trap = function(height) {
    if (height === null || height.length === 0) {
		return 0;
	}
    let trapped = 0, low = 0, high = height.length-1;
    let leftMax = 0, rightMax = 0;
    while (low < high) {
        if (height[low] <= height[high]) {
            if (leftMax > height[low]) trapped += leftMax - height[low];
            else leftMax = height[low];
            low++;
        } else {
            if (rightMax > height[high]) trapped += rightMax - height[high];
            else rightMax = height[high];
            high--;
        }
    }
    return trapped;
};
console.log(
    trap()
);

var trap = function(heights) {
    let count = 0, addition = true;
    while (addition == true) {
        addition = false;
        for (let i = 1; i < heights.length-1; i++) {
            let left = heights[i-1];
            let right = heights[i+1];
            if (left > heights[i] && heights[i] <= right) {
                let start = i;
                while (i < heights.length-1 && heights[i] == heights[i+1]) {
                    i++;
                }
                if (heights[i+1] > heights[i]) {
                    count += (i-start+1) *
                        Math.min(left-heights[i], heights[i+1]-heights[i]);
                    for (let j = start; j <= i; j++) {
                        heights[j] = Math.min(left, heights[i+1]);
                    }
                    addition = true;
                }
            }
        }
    }

    return count;
    // Brute Force
    // Time Complexity: O(n^2)
    // Space Complexity: O(1)
};