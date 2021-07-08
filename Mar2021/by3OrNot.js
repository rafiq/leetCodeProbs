function divisibleByThree(str){
    return str.split("").reduce((acc,curr) => acc + Number(curr),0) % 3 === 0
  }
  console.log(
    divisibleByThree('123'),//true, "Should return true if the sum of the given digits is divisible by 3.")
    divisibleByThree('9876543211234567890009'),//true
    divisibleByThree('19254'),//true, "Should return true if the sum of the given digits is divisible by 3.")
    divisibleByThree('88'),//false, "Should return false if the sum of the given digits is not divisible by 3.")
    divisibleByThree('1'),//false, "Should return false if the sum of the given digits is not divisible by 3.")
  )