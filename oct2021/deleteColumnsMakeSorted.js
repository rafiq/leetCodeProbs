/**
 * @param {string[]} strs
 * @return {number}
 */
 var minDeletionSize = function(strs) {
    // let count = 0;

    // strs.forEach(el => {
    //     console.log(el);
    //     let current = 0;

    //     for (let char of el) {
    //         console.log(char.charCodeAt(),current,count);
    //         if (current > char.charCodeAt()) {
    //             count++;
    //             break;
    //         } else {
    //             current = char.charCodeAt();
    //         }
    //     }

    // })

    // return count;
    let count = 0;
    for (let c = 0; c < strs[0].length; c++) {
        for (let i = 0; i < strs.length - 1; i++) {
            if (strs[i].charCodeAt(c) > strs[i + 1].charCodeAt(c)) {
                count++;
                break;
            }
        }
    }
    return count;
};
console.log(
    minDeletionSize(["cba","daf","ghi"]),//1
)