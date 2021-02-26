/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let maxWealth = 0;
    for (let i = 0; i < accounts.length; i++) {
        let account = accounts[i]
        let currentWealth = 0;
        for (let j = 0; j < account.length; j++) {
            currentWealth += account[j]
        }
        maxWealth = Math.max(maxWealth,currentWealth);
    }
    return maxWealth;
    // let bankAccounts = {};

    // for loop

    // for loop and objects
    // for (let i = 0; i < accounts.length; i++) {
    //     bankAccounts[accounts[i]] = accounts[i]
    // }

    //map
    // let sumOfAccounts = accounts.map(bank => {
    //     bank.reduce((a,b) => a + b,[])
    // })
};
console.log(
maximumWealth([[1,2,3],[3,2,1]]),//6
maximumWealth([[1,5],[7,3],[3,5]]),//10
maximumWealth([[2,8,7],[7,1,3],[1,9,5]]),//17
)
// You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

// A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.