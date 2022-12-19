// cTop-down approach: Breaks massive problem into smaller problems

var climbStairs = function(n) {
    let cache = {};

    let howManyWays = function(n) {
        if (n in cache) {
            return cache[n];
        }

        if (n < 4) {
            cache[n] = n;
            return cache[n];
        }

        cache[n] = (howManyWays(n - 1) + howManyWays(n - 2));
        return cache[n];
    }

    return howManyWays(n);
};
// Iterative approach: O(n) time-complexity, O(n) space-complexity
// You can also say this is bottom-up approach since we solve the low-level problem that builds up to the solution.

var climbStairs = function(n) {
	let steps = [1 ,1];
	for (let i = 2; i < n + 1; i++) {
		steps.push(steps[i - 1] + steps[i -2]);
	}
	return steps[n];
}
// Solution without dynamic programming: O(n^2) time complexity, O(1) space:

    var climbStairs = function(n) {
        if (n < 4) return n;
        return (climbStairs(n - 1) + climbStairs(n -2));
    }