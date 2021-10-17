/**
 * @param {number[]} bills
 * @return {boolean}
 */
 var lemonadeChange = function(bills) {

    // let drawerHash = {
    //     5:0,10:0,20:0,50:0,100:0
    // }

    // bills.forEach(bill => {
    //     if (bill === 5) drawerHash[5] += bill;
    //     if (bill === 10 && drawerHash[5]) drawerHash[5] -= 5;
    //     else return false;
    //     if (bill === 20) {
    //         drawerHash[5] -= 15

    //     }
    // })

    // return true
    if (bills[0] !== 5) return false
    var five = 0
    var ten = 0
    for (var i = 0, len = bills.length; i < len; i++) {
        if (bills[i] === 5) {
           five++
        } else if (bills[i] === 10) {
            if (five === 0) {
                return false
            }
            five--
            ten++
        } else {
            if (five === 0) {
                return false
            }
            if (ten === 0) {
                if (five < 3) {
                    return false
                } else {
                    five -= 3
                }
            } else {
                 five--
                 ten--
            }
        }
    }
    return true
};
console.log(
    lemonadeChange([5,5,10,10,20]),//false
)