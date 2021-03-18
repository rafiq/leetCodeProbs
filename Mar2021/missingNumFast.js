// The below is the third fastest code and I think it is pretty smooth how they were able to just add up the total array and subtract that from what the target array sum would be which would return the value of the missing part. Genius.

var missingNumber = function(nums) {
    const total = nums.reduce((total, current) => total + current, 0)

    let fullTotal = 0
    for (let i = 1; i <= nums.length; i++) {
        fullTotal += i
    }

    return fullTotal - total
};
