/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let targetSet = [];
    let anchor = 0;
    let explorer = numbers.length - 1;

    while (anchor < explorer) {
        let targNum = numbers[anchor] + numbers[explorer];
        // let leftElement = numbers[anchor];
        // let rightElement = numbers[explorer];

        if(targNum === target) {
            targetSet.push(anchor + 1);
            targetSet.push(explorer + 1);
            break;
        } else if (targNum < target) {
            anchor++;
        } else {
            explorer--;
        }
        // console.log(targNum);
        // console.log(target)
    }
    return targetSet;
};

// console.log(twoSum([2,7,11,15], 9)); //[1,2]
console.log(twoSum([0,0,3,4], 0)); //[1,2]