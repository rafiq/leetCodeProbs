/**
 * @param {string} s
 * @return {string}
 */
var reformat = function (s) {
  let numberArray = [];
  let letterArray = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] >= "a" && s[i] <= "z") letterArray.push(s[i]);
    else numberArray.push(s[i]);
  }
  if (Math.abs(numberArray.length - letterArray.length) > 1) return "";
  let result = "";
  let largerArray = [];
  let smallerArray = [];

  if (numberArray.length > letterArray.length) {
    largerArray = numberArray;
    smallerArray = letterArray;
  } else {
    largerArray = letterArray;
    smallerArray = numberArray;
  }

  while (largerArray.length > 0 || smallerArray.length > 0) {
    if (largerArray[0]) result += largerArray.pop();
    if (smallerArray[0]) result += smallerArray.pop();
  }
  return result;
  // let numberArray = s.match(/[0-9]/g) || [];
  // let letterArray =  s.match(/[a-z]/g) || [];
  // let result = "";
  // if (Math.abs(numberArray.length - letterArray.length) > 1) return "";
  // let [largerArray,smallerArray] = Math.max(numberArray.length,letterArray.length) === numberArray.length ? [numberArray,letterArray] : [letterArray,numberArray];

  // while (largerArray.length > 0 || smallerArray.length > 0) {
  //     if (largerArray[0]) result += largerArray.pop();
  //     if (smallerArray[0]) result += smallerArray.pop();
  // }
  // return result;
};
console.log(
  reformat("a0b1c2"), //"0a1b2c"
  reformat("1229857369"), //"0a1b2c"
  reformat("1"), //"0a1b2c"
  reformat("leetcode123"), //"""
  reformat("covid2019") //"""
);
