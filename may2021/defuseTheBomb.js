/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
 var decrypt = function(code, k) {
    let result = [];
    let p1 ;
    let count = k;
    let tempArray = [];

    for (let i = 0; i < code.length; i++) {
        count = k;
        if (k < 0) {
            count = Math.abs(count);
            p1 = code[i - 1] === undefined ? code.length - 1 : i - 1 ;
            while (count) {
                if (code[p1] === undefined) p1 = code.length - 1;
                tempArray.push(code[p1])
                count--;
                p1--
            }
        } else if (k === 0) {
            code.map(el => 0)
        } else {
            p1 = code[i + 1] === undefined ? 0 : i + 1;
            while (count) {
                if (code[p1] === undefined) p1 = 0;
                tempArray.push(code[p1])
                count--;
                p1++;
            }
        }
        result.push(sumNums(tempArray))
        tempArray = [];
    }
    return result;
};
function sumNums(arr) {
    return arr.reduce((acc,curr) => acc + curr,0)
}
console.log(
    decrypt([5,7,1,4], 3),//[12,10,16,13]
    decrypt([2,4,9,3], -2),//[12,10,16,13]
    decrypt([5,7,1,4], 0),//[12,10,16,13]
)

// ! I at least saw where my code was slowing down.
// I wanted to not use the double for loop and as a result I used two while loops which is duplicate code. The solution below, which is the fastest solution, did a nice clean job of using the double for loop and they also added the sum through calculation as opposed to using the reduce helper function.
var decrypt = function(code, k) {
    const result = []
    const isNegative = k < 0
    k = Math.abs(k)

    for(let i=0; i<code.length; i++) {
        let sum = 0
        let l=i

        for(let j=0; j<k; j++) {
            if(isNegative) {
                l--
            } else {
                l++
            }

            if(l === code.length) {
                l = 0
            }
            if(l === -1) {
                l = code.length - 1
            }

            sum += code[l]
        }

        result.push(sum)
    }

    return result
};