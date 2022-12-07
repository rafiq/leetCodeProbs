/*
When n is even, it is obvious that x^(n) = x^(n/2) * x^(n/2)
ex)
2^8 ->
2^4 * 2^4 ->
2^2* 2^2 * 2^2 * 2^2 ->
2^1* 2^1 * 2^1 * 2^1 * 2^1* 2^1 * 2^1 * 2^1

When n is odd, it is less obvious. x^(n) = x^(n/2) * x^(n/2) * x.
We take the floor of n/2.
ex)
2^7 ->
2^3 * 2^3 * x ->
2^1 * 2^1 * x * 2^1 * 2^1 * x * x
*/
var myPow = function(x, n) {
    if (n === 0) {
        return 1;
    }
    if (n < 0) {
        x = 1 / x;
        n = -n;
    }
    return fastPow(x, n);
    // T.C: O(log(N))
    // S.C: O(log(N)), call stack goes deep as log(N)
};

function fastPow(x, n) {
    if (n === 1) {
        return x;
    }
    let half = fastPow(x, Math.floor(n / 2));
    // n is even
    if (n % 2 === 0) {
        return half * half;
    }
    // n is odd
    else {
        return half * half * x;
    }
}

var myPow = function(x, n) {
    if(n < 0) {
        x = 1/x;
        n = -n;
    }
    if(x == 0) return 0;
    if(n == 0) return 1;
    if(n == 1) return x;

    if(n % 2 != 0) return x * myPow(x, n-1);

    // n >= 2, and n % 2 == 0
    x *= x;
    n /= 2;
    return myPow(x, n);
};