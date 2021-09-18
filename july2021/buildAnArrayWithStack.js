/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
 var buildArray = function(target, n) {
    // let result = []
    // let dummyArray = []
    // let i = 0;
    // dummyArray.push(i + 1)
    // while (i < target.length) {
    //     if (target[i] === i + 1) {
    //         result.push("Push")
    //         dummyArray.push(i + 1)
    //     }
    //     if (target[i] !== i + 1) {
    //         result.push("Pop")
    //         dummyArray.pop()
    //     }
    //     i++
    // }
    // return dummyArray

    let res = [], j = 1;
    for (let i = 0; i < target.length; i++) {
        if (target[i] === j) res.push("Push");
        else {
            res.push("Push", "Pop");
            i--;
        }
        j++;
    }
    return res;
};

console.log(
    buildArray([1,3], 3)
)