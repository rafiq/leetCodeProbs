// I really don't understand what is being asked which makes this question very hard, because I don't know what we are trying to get.

/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
var countBalls = function(lowLimit, highLimit) {
    let n = highLimit - lowLimit + 1;
    let lowLimitSum = String(lowLimit).split("").reduce((a,b) => Number(a) + Number(b),0);
    let highLimitSum = String(highLimit).split("").reduce((a,b) => Number(a) + Number(b),0);

    console.log(`balls:${n}, lowLimitSum:${lowLimitSum}, highLimitSum:${highLimitSum}`)
};
countBalls(1,10); //2
countBalls(5,15);//2
countBalls(9,28);//2
countBalls();
// You are working in a ball factory where you have n balls numbered from lowLimit up to highLimit inclusive (i.e., n == highLimit - lowLimit + 1), and an infinite number of boxes numbered from 1 to infinity.

// Your job at this factory is to put each ball in the box with a number equal to the sum of digits of the ball's number. For example, the ball number 321 will be put in the box number 3 + 2 + 1 = 6 and the ball number 10 will be put in the box number 1 + 0 = 1.

// Given two integers lowLimit and highLimit, return the number of balls in the box with the most balls.