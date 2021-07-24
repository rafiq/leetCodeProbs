/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
 var fairCandySwap = function(A, B) {
    let aSum = 0, bSum = 0;
    let m1 = new Map(), m2 = new Map();
    for (let num of A) {
        aSum += num;
        m1.set(num, m1.get(num)+1 || 1);
    }
    for (let num of B) {
        bSum += num;
        m2.set(num, m2.get(num)+1 || 1);
    }
    let average = (aSum + bSum) / 2;
    for (let num of A) {
        let diff = average-aSum;
        if (m2.has(num+diff)) return [num, num+diff];
    }
    // let copyAlice = aliceSizes.slice();
    // let copyBob = bobSizes.slice();
    // for (let i = 0; i < aliceSizes.length; i++) {
    //     for (let j = 0; j < bobSizes.length; j++) {
    //         let temp = copyAlice[i];
    //         copyAlice[i] = copyBob[j]
    //         copyBob[j] = temp
    //         if (sumArray(copyAlice) === sumArray(copyBob)) return [copyAlice[i],copyBob[j]].sort()
    //         copyAlice = aliceSizes.slice();
    //         copyBob = bobSizes.slice()
    //     }
    // }
    // return null;
};
function sumArray(arr) {
    return arr.reduce((acc,curr) => acc + curr,0)
}
console.log(
    fairCandySwap([1,1], [2,2]),
    fairCandySwap([1,2,5], [2,4]),
    fairCandySwap([1,2],[2,3]),
    fairCandySwap([2], [1,3]
        ),
)