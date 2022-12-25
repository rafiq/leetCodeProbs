var longestOnes = function(A, K) {
    let left = 0;
    let flips = 0;
    let max = 0;
    for (let right = 0; right < A.length; right++) {
        if (A[right] === 0) flips++;
        if (flips > K && A[left++] === 0) flips--;
        max = Math.max(max, right + 1 - left);
    }
    return max;
};

function longestOnes(A, lives) {
    let [left, right] = [0, 0];
    while (right < A.length) {
        if (A[right] === 0) {
            lives--;
        }
        if (lives < 0) {
            if (A[left] === 0) {
                lives++;
            }
            left++;
        }
        right++;
    }
    return right - left;
}