var minCostClimbingStairs = function(cost) {
    let minCosts = new Array(cost.length+1); // the last index is for the end of the floor
     minCosts[0] = cost[0], minCosts[1] = cost[1];
     // minCosts[i] represents the minimum cost to get to i and climb up from i
     for (let i = 2; i <= cost.length; i++) {
         minCosts[i] = Math.min(minCosts[i-1], minCosts[i-2]) +
             (i == cost.length ? 0 : cost[i]);
         // 0 instead of cost[i] because there is no more stair to climb up
         // and therefore there is no cost
     }
     return minCosts[minCosts.length-1];
     // DP
     // Time Complexity: O(n)
     // Space Complexity: O(n)
 };
 var minCostClimbingStairs = function(cost) {
     let prevPrev = cost[0], prev = cost[1];
     for (let i = 2; i < cost.length; i++) {
         let current = cost[i] + Math.min(prevPrev, prev);
         // current represents the minimum cost to get to this step from the start and climb up from this step
         prevPrev = prev;
         prev = current;
         // since prev becomes current and prevPrev becomes prev, they both represent the minimum cost to get to where they are currently at from the start and climb up from there
     }
     // Now, we can reach the top of the floor from both prevPrev and prev.
     // prev is the minimum cost to reach the top floor by stepping once
     // and prevPrev is the minimum cost to reach to top floor by stepping twice.
     // We want to minimise the cost to get to the top, so we compute the min value between them
     return Math.min(prevPrev, prev);
     // Time Complexity: O(n)
     // Space Complexity: O(1)
 }