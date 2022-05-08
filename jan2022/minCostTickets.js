var mincostTickets = function(days, costs) {
    const valids = [1,7,30];
    const hash = new Map();
    const DFS = (day, days, costs) => {
        if(hash.has(day)) return hash.get(day);
        if( day===undefined ) return 0;
        let res = Number.MAX_SAFE_INTEGER;
        for(let i=0; i<costs.length; ++i) {
            res = Math.min(res, costs[i] + DFS( days.find(d=>d>=day+valids[i]), days, costs));
        }
        hash.set(day, res);
        return res;
    }

    return DFS(days[0], days, costs);
};

// /**
//  * @param {number[]} days
//  * @param {number[]} costs
//  * @return {number}
//  */
//  var mincostTickets = function(days, costs) {
//     let dp = Array(days[days.length - 1] + 1).fill(0)
//     dp[0] = 1;

//     for (let i = 1; i < dp.length; i++) {
//         for (let j = 0; j < costs.length; j++) {
//             dp[i] = Math.min(dp[i],dp[i - costs[j]] + 1)
//         }
//     }

//     return dp
// };
console.log(
    mincostTickets([1,4,6,7,8,20], costs = [2,7,15])
);

const mincostTickets = (days, costs) => {
    let daysMap = {};
    for (let d of days) { daysMap[d] = true; }

    let last = days[days.length - 1], dp = Array(last + 1).fill(0);
    const get = d => d < 0 ? 0 : dp[d];

    for (let day = 1; day <= last; day++) {
        if (!daysMap[day]) { dp[day] = dp[day - 1]; continue; }
        dp[day] = Math.min(dp[day - 1] + costs[0], get(day - 7) + costs[1], get(day - 30) + costs[2]);
    }

    return dp[last];
};
// The below is a DFS approach that is searching through each option of coins and using memoization by creating a hash map mapped from the count of the day to the cost for that day.

// var mincostTickets = function(days, costs) {
//     const valids = [1,7,30];
//     const hash = new Map();
//     const buy = function(day, days, costs) {
//         if(hash.has(day)) return hash.get(day);
//         if( day===undefined ) return 0;
//         let res = Number.MAX_SAFE_INTEGER;
//         for(let i=0; i<costs.length; ++i) {
//             res = Math.min(res, costs[i] + buy( days.find(d=>d>=day+valids[i]), days, costs));
//         }
//         hash.set(day, res);
//         return res;
//     }

//     return buy(days[0], days, costs);
// };