const deleteAndEarn = (nums) => {
    let hash = {};
    for (let num of nums) {
        hash[num] = hash[num] ? hash[num] + 1 : 1;
    }
    nums = [...new Set(nums)];
    nums.sort((a,b) => a - b)
    let earn2 = 0
    let temp = 0
    let earn1 = 0

    for (let i = 0; i < nums.length; i++) {
        let currEarn = nums[i] * hash[nums[i]];

        if (i > 0 && nums[i] == nums[i - 1] + 1) {
            temp = earn2;
            earn2 = Math.max(currEarn + earn1, earn2);
            earn1 = temp;
        } else {
            temp = earn2
            earn2 = currEarn + earn2;
            earn1 = temp;
        }

    }

    return earn2
}

console.log(
    deleteAndEarn([2,2,3,3,3,4]),
    deleteAndEarn([2,2,3,3,3,4]),
);