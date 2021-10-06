
/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
 var numWaterBottles = function(numBottles, numExchange) {
    let drank = numBottles;
    let empty = numBottles;
    while (empty >= numExchange) {
        let newDrinks = Math.floor(empty / numExchange);
        drank += newDrinks;
        empty = (empty % numExchange) + newDrinks;
    }
    return drank;
};

console.log(
    numWaterBottles(9,3),
    numWaterBottles(15,4),
    numWaterBottles(5,5),
)

