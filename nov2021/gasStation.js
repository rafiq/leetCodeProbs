/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
 var canCompleteCircuit = function(gas, cost) {
    let positions = [];
    let i;
    let gasTank = 0;
    let abort = gas.length;
    let tracker = 0;

    for (i = 0; i < gas.length; i++) {
        if (gas[i] > cost[i]) positions.push(i);
    }
    let start = positions[0];
    let j = 0;
    if (positions.length > 0) {
        while (true) {
            if (j === gas.length - 1) j = 0;
            if (j === start) return j;
            if (tracker === abort) return -1;

            gasTank = (gasTank + gas[j]) - cost[j];
            // console.log(gasTank,j,cost[j],gas[j + 1])
            j++
            tracker++
        }
    } else {
        return -1;
    }

    // return positions;
    let totalGas = (currGas = station = 0);
    for (let i = 0; i < gas.length; i++) {
      currGas += gas[i] - cost[i];
      totalGas += gas[i] - cost[i];
      if (currGas < 0) {
        currGas = 0;
        station = i + 1; // Last station not ample, try next
      }
    }
    return totalGas < 0 ? -1 : station;
};
console.log(
    canCompleteCircuit([1,2,3,4,5], cost = [3,4,5,1,2]),//3
    canCompleteCircuit([2,3,4], cost = [3,4,3]),//3
);