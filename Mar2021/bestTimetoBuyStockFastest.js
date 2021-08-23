// Here is a another way of the same answer that I took and it is almost the same logic.

var maxProfit = function(prices) {
    let buy = Infinity;
    let profit = 0;

    prices.forEach((elem) => {
       if(elem < buy) buy = elem;
       if(elem - buy > profit) profit = elem - buy;
    })
     return profit;
 };