/**
 * @param {string[]} operations
 * @return {number}
 */
 var finalValueAfterOperations = function(operations) {
    let decrement = "--";
    let increment = "++";
    let result = 0;

    operations.forEach(el => {
        if (el.includes(decrement)) result--;
        if (el.includes(increment)) result++;
    })

    return result;
};
console.log(
    finalValueAfterOperations(["--X","X++","X++"]),//1
    finalValueAfterOperations(["++X","++X","X++"]),//1
    finalValueAfterOperations(["X++","++X","--X","X--"]),//1
)