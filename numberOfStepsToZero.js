

function makingSteps(num) {
  let numOfSteps = 0;

  while (num > 0) {
    if (num % 2 === 1) {
      numOfSteps++;
      num -= 1;
    } else if (num % 2 === 0) {
      numOfSteps++;  
      num /= 2;
    } else {
      return 1;
    }
    
  }

  return numOfSteps;
}

console.log(makingSteps(8));
console.log(makingSteps(7));
console.log(makingSteps(6));
console.log(makingSteps(5));
console.log(makingSteps(4));
console.log(makingSteps(3));
console.log(makingSteps(2));
console.log(makingSteps(1));
console.log(makingSteps(83));
console.log(makingSteps(1000));
console.log(makingSteps(10000));
console.log(makingSteps(1001));
console.log(makingSteps(10001));
console.log(makingSteps(245));
console.log(makingSteps(81345));