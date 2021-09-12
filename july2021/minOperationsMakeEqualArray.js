/**
 * @param {number} n
 * @return {number}
 */
 var minOperations = function(n) {
    // let count = 0
    // let array = Array(n).fill(0).reduce((acc,_,idx) => {
    //     acc.push((idx * 2) + 1)
    //     return acc
    // },[])

    // while (!array.every((el,_,arr) => el === arr[0])) {
    //     array[array.indexOf(Math.max(...array))] -= 1
    //     array[array.indexOf(Math.min(...array))] += 1
    //     count++
    // }

    // return count

    let arr = new Array(n), mid;
    let res = 0;
    for (let i = 0; i < n; i++) arr[i] = 2*i + 1;
    if (n % 2 === 0) mid = (arr[n/2] + arr[n/2 - 1]) / 2;
    else mid = arr[Math.floor(n/2)];
    for (let i = 0; i < n; i++) {
        if (arr[i] >= mid) break;
        res += mid-arr[i];
    }
    return res;
};
console.log(
    minOperations(3),//2
    minOperations(6),//9
)