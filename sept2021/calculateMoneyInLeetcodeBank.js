/**
 * @param {number} n
 * @return {number}
 */
 var totalMoney = function(n) {
    // let result = 0;
    // let initialValue = n;
    // let i;

    // while (initialValue) {

    //     for ( i = 1; i < 7; i++) {
    //         result += i;
    //     }
    //     initialValue -= 7;
    // }

    // return result
    let week = Math.floor(n/7);
    let day = n%7;
    let sum = 0;

    if(week){
        for(let i=0; i<week; i++){
            sum += ((i+1)+(i+7))*7/2;
        }
    }

    sum += ((week+1)+(week+day))*day/2;
    return sum;
};
console.log(
    totalMoney(10),//37
)