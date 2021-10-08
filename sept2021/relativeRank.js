/**
 * @param {number[]} score
 * @return {string[]}
 */
 var findRelativeRanks = function(score) {

    let sortedScore = score.slice().sort((a,b) => b - a);
    let result = [];

    sortedScore.forEach((el,idx) => {
        result[score.indexOf(el)] = idx === 0 ? "Gold Medal" : idx === 1 ? "Silver Medal" : idx === 2 ? "Bronze Medal" : String(idx + 1);
    })

    return result;
};
console.log(
    findRelativeRanks([10,3,8,9,4]),//[1,5,3,2,4]
    findRelativeRanks([5,4,3,2,1]),//[1,5,3,2,4]

)