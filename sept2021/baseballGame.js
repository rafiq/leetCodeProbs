/**
 * @param {string[]} ops
 * @return {number}
 */
 var calPoints = function(ops) {
    // let result = []

    // for (let i = 0; i < ops.length; i++) {
    //     console.log(result)
    //     if (ops[i] === "C") result = result.slice(0,result.length - 2)
    //     if (ops[i] === "D") result.push(+result[result.length - 1] * 2)
    //     if (ops[i] === "+") result.push(+result[i - 1] +
    //         +ops[i - 2])
    //     if (typeof +ops[i] === "number") result.push(+ops[i])
    // }

    // return result.reduce((acc,curr) => acc + curr)
    const arr = []
    const actions = {
        C: () => arr.pop(),
        D: () => arr.push(arr[arr.length - 1] * 2),
        '+': () => arr.push(arr[arr.length - 1] + arr[arr.length - 2])
    }
    for (let a of ops) {
        a in actions ? actions[a](): arr.push(+a)
    }
    return arr.reduce((sum, num) => sum + num)
};
console.log(
    calPoints(["5","2","C","D","+"])
)