/**
 * @param {number[]} data
 * @return {number}
 */
 var minSwaps = function(data) {
    // let result = 0;


    // return result;

    let max = 0, left = 0, right = 0, count = 0
	let ones = data.reduce((sum, num) => sum + num, 0)
    while (right < data.length) {
        count += data[right++]
        if (right - left > ones) count -= data[left++]
        max = Math.max(max, count)
    }
	return ones - max
};
console.log(
    minSwaps([1,0,1,0,1,0,0,1,1,0,1])
);