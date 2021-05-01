/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
 var ParkingSystem = function(big, medium, small) {
    this.lot = [big, medium, small]
};

// /**
//  * @param {number} carType
//  * @return {boolean}
//  */
ParkingSystem.prototype.addCar = function(carType) {
    this.lot[carType - 1]--
    return this.lot[carType - 1] >= 0
};
// function ParkingSystem(array) {
    // let inventoryMap = {1:0,2:0,3:0};
    // let keys = Object.keys({1:0,2:0,3:0});
    // array[0].forEach((el,idx) => inventoryMap[keys[idx]] = el);
    // let result = [null];

    // for (let i = 1; i < array.length; i++) {
    //     if (inventoryMap[array[i]] ) {
    //         inventoryMap[array[i]]--
    //         result.push(true);
    //     } else result.push(false);
    // }
    // return result

// }
/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */
console.log(
    ParkingSystem([[1, 1, 0], [1], [2], [3], [1]])
)