/**
 * @param {number[]} salary
 * @return {number}
 */
 var average = function(salary) {
    let max = 0;
    let min = salary[0];
    let sum = 0;

    for (let i = 0; i < salary.length; i++) {
        sum += salary[i];
        min = Math.min(min, salary[i]);
        max = Math.max(max, salary[i]);
    }
    return (sum - max - min) / (salary.length - 2);

    // ! second try below 89%
    // let max = 0;
    // let min = salary[0];
    // let sum = 0;

    // for (let i = 0; i < salary.length; i++) {
    //     sum += salary[i];
    //     if (salary[i] > max) max = salary[i];
    //     if (salary[i] < min) min = salary[i];
    // }
    // return (sum - max - min) / (salary.length - 2);
    // ! first try below ~30%
    // let excludedSalaryArray = salary.sort((a,b) => a - b).slice(1,-1);

    // return excludedSalaryArray.reduce((acc,curr) => acc + curr) / excludedSalaryArray.length;
};
console.log(
    average([4000,3000,1000,2000]),//2500
    average([1000,2000,3000]),//2000
)