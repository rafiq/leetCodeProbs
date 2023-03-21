/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
 var numRescueBoats = function(people, limit) {
    // let cache = {};
    // // loop through and make a cache of the difference between the element and the limit
    // for (let person of people) {
    //     let diff = Math.abs(person - limit);
    //     cache[diff] ? cache[diff]++ : cache[diff] = 1;
    // }

    // for (let i = 0; i < people.length; i++) {
    //     let diff = people[i] - limit

    //     if (cache[diff]) {
    //         count++
    //         people[i] = -1;
    //         people[people.indexOf(diff)] = -1;
    //         cache[diff] > 1 ? cache[diff]-- : delete cache[diff];
    //     } else {

    //     }
    // }

    // return cache;
    // loop again and find any matches and put them together.


    // The greedy approach doesn't work for this problem so I think something like two sum would work.

    // It does Worker, but needs a slight mode
            people.sort((a,b) => a-b );
            let ans = 0;
            let lp = 0, rp = people.length-1;

            while( lp <= rp  ) {
                if( people[rp] + people[lp] <= limit  ) {
                    lp++;
                }
                rp--;
                ans += 1;
            }

            return ans;
            // T: O(n logn)
            // S: O(1)

    // let sortedPeople  = people.sort((a,b) => a - b);
    // let count = 0;

    // while (sortedPeople.length && sortedPeople[0] <= limit) {
    //     if (sortedPeople[0] + sortedPeople[1] <= limit) {
    //         // pop those two and add one to count;
    //         sortedPeople.shift();
    //         sortedPeople.shift();
    //         console.log(sortedPeople);
    //         count++
    //     } else if (sortedPeople[0] <= limit) {
    //         sortedPeople.shift()
    //         console.log(sortedPeople);
    //         count++
    //     }
    // }

    // return count
    // T: O(n logn)
    // S: O(n)
};
console.log(
    numRescueBoats([3,5,3,4], limit = 5),// 4
    numRescueBoats([3,2,2,1], limit = 3),// 3
    numRescueBoats([1,2],3),// 1
    numRescueBoats([5,1,4,2]
        ,6),// 2
);