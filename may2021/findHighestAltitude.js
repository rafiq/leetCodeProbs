/**
 * @param {number[]} gain
 * @return {number}
 */
 var largestAltitude = function(gain) {
    let maxAltitude = -Infinity;
    let diff = 0;

    for (let i = 0; i < gain.length; i++) {
        if (diff > maxAltitude) maxAltitude = diff;
        diff = diff + gain[i]
        maxAltitude = Math.max(diff, maxAltitude)
    }

    return maxAltitude;
    // let resultArray = [0];

    // for (let i = 0; i < gain.length; i++) {
    //     resultArray.push(resultArray[i] + gain[i])
    // }

    // return Math.max(...resultArray)
};
console.log(
    largestAltitude([-5,1,5,0,-7]),//1
    largestAltitude([-4,-3,-2,-1,4,3,2]),//0
    largestAltitude([44,32,-9,52,23,-50,50,33,-84,47,-14,84,36,-62,37,81,-36,-85,-39,67,-63,64,-47,95,91,-40,65,67,92,-28,97,100,81]),//781
)