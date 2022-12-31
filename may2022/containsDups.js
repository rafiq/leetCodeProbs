var containsDuplicate = function(nums) {
    var originalLength = nums.length;
    for (i = 0; i < originalLength; i++) {
        if (nums.indexOf(nums.shift()) !== -1) return true;
    }

    return false;
};

return nums.length !== new Set(nums).size;

var containsDuplicate = function(A) {
    const S = new Set();
    for (let a of A) {
        if (S.has(a)) return true;
        S.add(a);
    }
    return false;
};