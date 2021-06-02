
/*

Problem
=======
Input: an array of numbers
Output: an array, containing all pairs of numbers that have a difference of 2 as
a sub-array (sorted in ascending order of values).
Rules:
  - Pairs should be created and added to the result array as sub-arrays.
  - The result array should be sorted in ascending order of values.
  - There are no duplicate numbers in the input  array.
  - The order of the numbers in the input array should not matter.
Questions:
  - Should the input be validated?
  - Do we have to handle negative numbers ?


Algorithm
=========
- Declare variable `pairsArray` and initialize it to an empty array.
- Find all the pairs of numbers that have a difference of 2, adding each pair,
  sorted in ascending order, to the `pairsArray` array as a sub-array.
- Sort the `pairsArray` array in ascending order.
- Return the `pairsArray` array.

Sub-problem: finding all pairs of numbers
- Iterate through the numbers of the input array with `firstNum`:
    - Declare variable `pair` and initialize it to empty array.
    - For each current number, iterate through all the numbers of the array with `secondNum`:
        - If the difference between `firstNum` and `secondNum` is 2, add both
          numbers the `pair` array. Sort the `pair` array by ascending order,
          add it to the `pairsArray` array and reassign it to an empty array.
*/

function differenceOfTwo3(arr) {
    return arr.map(elem => {
      if (arr.includes(elem + 2)) {
        return [elem, elem+2];
      }
    }).filter(elem => elem);
  }

  function differenceOfTwo4(arr) {
    return arr.reduce((acc,curr,index) => {
      if (arr.includes(curr+2)) {
        return [...acc,[curr, curr + 2]];
      }

      return acc;
    },[]).sort((a,b) => a[0] - b[0]);
  }