// Solution 1: Recursive

var getSum = function(a, b) {
    if(b === 0) {
        return a;
    }
    return getSum(a ^ b, (a & b) << 1);
};
// Solution 2: Iterative

var getSum = function(a, b) {
    while(b) {
        const carry = a & b;
        a = a ^ b;
        b = carry << 1;
    }
    return a;
}