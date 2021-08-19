/**
 * @param {number[]} prices
 * @return {number[]}
 */
 var finalPrices = function(prices) {

    for (let i = 0; i < prices.length; i++) {
        if (prices.slice(i + 1).find(el => el <= prices[i])) {
            prices[i] = prices[i] - prices.slice(i + 1).find(el => el <= prices[i])
        }
    }
    return prices;

    // return prices.find(el => el <= 4)
};
function getDiscount(arr,target) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] <= target) {
            return target - arr[i];
        }
    }
    return arr[0];
}
//  var finalPrices = function(prices) {

//     for (let i = 0; i < prices.length; i++) {
//         prices[i] = getDiscount(prices.slice(i),prices[i])
//     }
//     return prices;
// };
// function getDiscount(arr,target) {
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] <= target) {
//             return target - arr[i];
//         }
//     }
//     return arr[0];
// }
console.log(
    finalPrices([8,4,6,2,3]),//[4,2,4,2,3]
    finalPrices([1,2,3,4,5]),//[1,2,3,4,5]
    finalPrices([10,1,1,6]),//[9,0,1,6]
)