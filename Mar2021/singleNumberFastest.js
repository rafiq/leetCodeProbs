// Here is something new that I do not know about what so ever. The little exponent sign thingy.

var singleNumber = function(nums) {
    let num = 0;
    for (let n of nums) {
        num ^= n;
    }
    return num;
};

