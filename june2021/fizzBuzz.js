/**
 * @param {number} n
 * @return {string[]}
 */
 var fizzBuzz = function(n) {
    let result = new Array(n).fill(0)
    for (let i = 0; i < result.length; i++) {

        if ((i + 1) % 3 === 0 && (i + 1) % 5 === 0) {
            result[i] = "FizzBuzz";
        } else if ((i + 1) % 3 === 0) {
            result[i] = "Fizz";
        } else if ((i + 1) % 5 === 0) {
            result[i] = "Buzz"
        } else {
            result[i] = String(i + 1);
        }
    }
    return result
};
console.log(
    fizzBuzz(3),//["1","2","Fizz"]
    fizzBuzz(5),//["1","2","Fizz","4","Buzz"]
)