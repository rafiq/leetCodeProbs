/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // let min = Math.min(...prices);
    // let startingIndex = prices.indexOf(min);
    // let possibleDays = prices.slice(startingIndex);
    // // if (possibleDays.length < 2) return 0
    // let max = Math.max(...possibleDays)
    // let highestDay = prices.indexOf(max);
    // let sumsArray = [prices[0]];
    // let sum = 0;
    // prices.forEach((num,idx) => sumsArray.push(prices[idx + 1] || 0 - num))
    // return Math.max(...sumsArray);
    // return sumsArray;
    // return prices.reduce((acc,curr,idx) => {
    //     if (curr + prices[idx + 1] > 0)
    //     return acc;
    // },0);

    // if (max - min < 1) return 0
    // else return max - min
    let min = prices[0];
    let profit = 0;

    for(let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i -1]) {
            profit = Math.max(profit, prices[i] - min);
        } else {
            min = Math.min(min, prices[i]);;
        }
    }

    return profit;
};
console.log(
    maxProfit([7,1,5,3,6,4]),//5
    maxProfit([7,6,4,3,1]),//0
    maxProfit([1,2]),//1
    maxProfit([1,4,2]),//3
    maxProfit([2,4,1]),//2
)