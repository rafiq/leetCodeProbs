/**
 * @param {number[]} arr
 * @param {number} difference
 * @return {number}
 */
 var longestSubsequence = function(arr, difference) {
    let cache = new Map();
    let dp = Array(arr.length).fill(0)
    let max = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        let currentMap = new Map()

        for (let j = 0; j < i; j++) {

            for (let k = j + 1; k < arr.length; k++) {


            }
            // let count = 1;
            // if (cache.has(difference, count)) {
            //     cache[i] = cache.set(difference,cache.get(difference, count) + 1)
            // } else {
            //     currentMap.set(difference,2)
            //     cache[i] = currentMap;
            // }
        }

        // if (max > cache[i]) max = cache[i]
    }


    return cache
};
console.log(
    longestSubsequence([1,5,7,8,5,3,4,2,1], difference = -2)
);

var longestSubsequence = function(arr, difference) {
    // Map subsequence tail -> size of subsequence at this tail
    let subsequences = new Map();
    let longestSubsequenceLength = 1;

    arr.forEach(value=>{
	    // value - difference will find the proper subsequence tail to attach to if
		// it exists
        let existingSubsequenceSize = subsequences.get(value - difference);

        let subsequenceSizeAtValue = existingSubsequenceSize ? existingSubsequenceSize + 1 : 1;
        subsequences.set(value, subsequenceSizeAtValue);
        if (subsequenceSizeAtValue > longestSubsequenceLength) {
            longestSubsequenceLength = subsequenceSizeAtValue;
        }
    })

    return longestSubsequenceLength;

};

var longestSubsequence = function(arr, difference) {
    const map = new Map()
    let max = 0
    for(let num of arr) {
        const prev = map.has(num - difference) ? map.get(num - difference) : 0
        const val = prev + 1
        map.set(num, val)
        max = Math.max(max, val)
    }
    return max
};

var longestSubsequence = function(arr, difference) {
    let dp = new Map()
    let max = 0
    for (let i = 0; i < arr.length; i++) {
        let prev = dp[arr[i] - difference]
        dp[arr[i]] = (prev ? prev : 0) + 1

        if (dp[arr[i]] > max)
			max = dp[arr[i]]
    }

    return max
}