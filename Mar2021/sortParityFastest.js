// Here is a answer that I can totally understand. It is using two points at both ends of the array and they will move towards the middle until they hit each other. If they are opposite(odd on left and even on right) then they will swap them using a temp variable. If just right pointer is odd, then decrement. If just left pointer is even, the increment. Finally return the mutated original array.

var sortArrayByParity = function(A) {

    let i = 0;
    let j = A.length -1;

    while(i < j) {
    if (A[i] % 2 !== 0 && A[j] % 2 === 0) {
      let temp = A[i];
      A[i] = A[j];
      A[j] = temp;
    }

    if (A[i] % 2 !== 0) {
      j--;
    }

    if(A[i] % 2 === 0) {
      i++;
    }
    }

    return A;
};