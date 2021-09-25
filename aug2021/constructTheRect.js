/**
 * @param {number} area
 * @return {number[]}
 */
 var constructRectangle = function(area) {
        // let results = []

        // for (let i = area / 2; i > 0; i--) {
        //     for (let j = i; j > 0; j--) {
        //         if (i * j === area && i >= j) results.push([i,j])
        //     }
        // }
        // return results.sort()[0]

        let w = parseInt(Math.sqrt(area))

    while(!Number.isInteger(area/w)) w--

    return [area/w, w]
};
console.log(
    constructRectangle(4),//2,2
    constructRectangle(37),//2,2
    constructRectangle(122122),//2,2
)