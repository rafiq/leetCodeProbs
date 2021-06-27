// My answer was the fastest and the one below was second fastest.

var addBinary = function(a, b) {
    let p1 = a.length - 1;
    let p2 = b.length - 1;
    let carry = 0;
    let result = '';
    while (a[p1] || b[p2]) {
        const x = a[p1] ?? 0;
        const y = b[p2] ?? 0;
        const sum = x ^ y ^ carry;
        carry = (x & y) | ((x ^ y) & carry);
        result = sum + result;
        p1--
        p2--
    }

    return carry > 0 ? carry + result :result

};