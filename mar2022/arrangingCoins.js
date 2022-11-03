

var arrangeCoins = function (n, k = 1) {
    return n >= k ? arrangeCoins(n - k, k + 1) : k - 1
}



var arrangeCoins = function(n) {
    let result = [], i = 1;
    while (n >=  i) {
        result.push(i);
        n -= i;
        i++;
    }
    return result.length;
};