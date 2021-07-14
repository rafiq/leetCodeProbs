/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
 var canFormArray = function(arr, pieces) {
    const map = {};

    for(const p of pieces) {
        map[p[0]] = p
    }

    for(let i = 0; i < arr.length;) {
        if(!map[arr[i]]) {
            return false;
        }
        const piece = map[arr[i]]

        const l = piece.length

        for(let j = 0; j < l; j++) {
            if(arr[i + j] !== piece[j]) {
                return false
            }
        }
        i += l;
    }
    return true;

    // let arrMap = arr.reduce((acc,curr) => {
    //     acc[curr] = false;
    //     return acc;
    // },{})

    // let piecesMap = pieces.reduce((acc,curr) => {
    //     acc[curr] ? acc[curr]++ : acc[curr] = 1;
    //     return acc;
    // },{})

    // for (let i = 0; i < pieces.length; i++) {
    // //     // for (let j = 0; j < pieces.length; j++) {


    // //     // }
    //     if (pieces[i].length > 1) {
    //         pieces[i].forEach(el => {
    //             arr.includes(el)
    //         })
    //     }
    // }
    // return  pieces[1].every(el => pieces.indexOf(el) )// arr.includes(...pieces[1])
};

console.log(
    canFormArray([91,4,64,78], [[78],[4,64],[91]])
)