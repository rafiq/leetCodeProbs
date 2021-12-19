/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number[]} arr3
 * @return {number[]}
 */
 var arraysIntersection = function(arr1, arr2, arr3) {
    let result = [];

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            for (let k = 0; k < arr3.length; k++) {
                if (arr1[i] === arr2[j] && arr2[j] === arr3[k]) {
                    result.push(arr1[i]);
                }
            }
        }
    }

    return result;
};
console.log(
    arraysIntersection([1,2,3,4,5], arr2 = [1,2,5,7,9], arr3 = [1,3,4,5,8]),//]1,5
    arraysIntersection([197,418,523,876,1356], arr2 = [501,880,1593,1710,1870], arr3 = [521,682,1337,1395,1764]),//]1,5
);

// FASTEST
let p1 = 0, p2 = 0 , p3 = 0;

while(p1 < arr1.length && p2 < arr2.length && p3 < arr3.length) {
      if(arr1[p1] === arr2[p2] && arr2[p2] === arr3[p3]) {
         result.push(arr1[p1]);
          p1++;
          p2++;
          p3++;
         } else if(arr1[p1] < arr2[p2]) {
            p1++;
         } else if(arr2[p2] < arr3[p3]) {
            p2++;
         } else {
            p3++;
         }
      }

return result;
};