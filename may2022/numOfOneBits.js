// A more JavaScripty approach with match
   return n.toString(2).match(/1/g)?.length ?? 0;
// A more JavaScripty approach with replace
   return n.toString(2).replace(/0/g, '').length;
// Bit left shift
  let res = 0;
  let cur = 1;
  for (let i = 0; i < 32; i++) {
    if ((n & cur) !== 0) {
      res++;
    }
    cur = cur << 1;
  }
  return res;
// Bit trick with n & n - 1
    let sum = 0;
    while (n) {
        sum++;
        n &= (n - 1);
    }
    return sum;