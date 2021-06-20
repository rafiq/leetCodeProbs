/**
 * @param {string} s
 * @return {number}
 */
 var maxScore = function(s) {
    let max = 0;
    let sum = 0;
    for (let i = 1; i < s.length; i++) {
        let [left,right] = [s.slice(0,i),s.slice(i)];
        if (left.match("0")) sum += left.match(/[0]/g).length;
        if (right.match("1")) sum += right.match(/[1]/g).length;
        if (max < sum) max = sum;
        sum = 0;
    }

    return max;
};
console.log(
    maxScore("011101"),//5
    maxScore("00111"),//5
    maxScore("1111"),//3

)