/**
 * @param {number[][]} items
 * @return {number[][]}
 * make hash
 * iterate through list
 * id will be made keys
 * scores will be pushed to value of key with
 * (helper function)get average of first five elements of values divide by length if it is five or less otherwise divide by five
 * sort result by ID in increasing order
 *
 */
 var highFive = function(items) {
    let result = [];
    let hash = {};

    for (let item of items) {
        let score = item[1];
        let studentID = item[0];
        hash[studentID] ? hash[studentID].push(score) : hash[studentID] = [score];
    }
    let keys = Object.keys(hash);

    for (let key of keys) {
        hash[key] = hash[key].sort((a,b) => b - a)
    }
    for (let key of keys) {
        result.push([+key,getAverage(hash[key])])
    }
    return result;
};
function getAverage(array) {
    let len = array.length > 5 ? 5 : array.length;
    let sum = 0;

    for (let i = 0; i < len; i++) {
        sum += array[i];
    }

    return Math.floor(sum / len);
}
console.log(
    highFive([[1,91],[1,92],[2,93],[2,97],[1,60],[2,77],[1,65],[1,87],[1,100],[2,100],[2,76]]),
    highFive([[1,100],[7,100],[1,100],[7,100],[1,100],[7,100],[1,100],[7,100],[1,100],[7,100]]),
);