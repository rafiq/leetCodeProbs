// Naive Solution
var solution = function(knows) {
    /**
     * @param {integer} n Total people
     * @return {integer} The celebrity
     */
    return function(n) {
        let inDegree = new Array(n).fill(0), outDegree = new Array(n).fill(0);
        for (let a = 0; a < n; a++) {
            for (let b = 0; b < n; b++) {
                if (a == b) continue;
                if (knows(a, b)) { // a knows b so as a graph, it is a -> b
                    outDegree[a]++;
                    inDegree[b]++;
                }
            }

        }
        for (let i = 0; i < n; i++) {
            if (inDegree[i] == n-1 && outDegree[i] == 0) {
                return i;
            }
        }
        return -1;
    };
    // Time Complexity: O(N^2) on the assumption that knows() has O(1) time complexity
    // Space Complexity: O(N)
};
// Optimal Solution
var solution = function(knows) {
    /**
     * @param {integer} n Total people
     * @return {integer} The celebrity
     */
    return function(n) {
        let candidate = 0;
        // rule out n-1 people
        for (let i = 0; i < n; i++) {
            if (candidate == i) continue;
            if (knows(candidate, i)) {
                candidate = i;
            }
        }

        // check if this candidate is the celebrity
        for (let i = 0; i < n; i++) {
            if (candidate == i) continue;
            if (knows(candidate, i) || !knows(i, candidate)) {
                return -1;
            }
        }
        return candidate;
    };
    // if knows(a,b) is true, a can't be the celebrity because the celebrity doesn't know anyone.
    // if knows(a,b) is false, b can't be the celebrity because everyone knows the celebrity.
    // So, for each call to knows(), we can rule out a person, and therefore we will be left with only one person left.
    // It is not guaranteed that this person is the celebrity so we check and then return the answer.
    // Time Complexity: O(N) on the assumption that knows() has O(1) time complexity
    // Space Complexity: O(1)
};