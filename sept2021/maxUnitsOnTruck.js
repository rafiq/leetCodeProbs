/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
 var maximumUnits = function(boxTypes, truckSize) {
    boxTypes = boxTypes.sort((a,b) => b[1] - a[1])
    // let result = 0
    // let count = truckSize

    // while (count) {
    //     let max = 0
    //     for (let boxInfo of boxTypes) {
    //         for (let i = 0; i < boxInfo.length; i++) {
    //             while (boxInfo[i]) {
    //                 if (boxInfo[i] = 0) {

    //                 }
    //             }
    //         }

    //     }
    // }

    // return result

    let maxUnits = 0,
    currSize = 0;

for(let [num, units] of boxTypes) {
    if(currSize + num < truckSize) {
        currSize += num;
        maxUnits += num * units;
    } else {
        const remaining = truckSize - currSize;
        currSize += remaining;
        maxUnits += remaining * units;
    }
}
return maxUnits;
};
console.log(//[5,3]
    maximumUnits([[1,3],[2,2],[3,1]],  4),//8
)