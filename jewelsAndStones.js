// Checking for IP



check if units are between 0-255

check if less than four units.
check if more than four units

function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      console.log(false);
      break;
    } else if()
  }

  return true;
}



// // You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// // Letters are case sensitive, so "a" is considered a different type of stone from "A".

// /**
//  * @param {string} jewels
//  * @param {string} stones
//  * @return {number}
//  */
// var numJewelsInStones = function(jewels, stones) {
  // let jewelsCodes = "";
  // let stonesCodes = "";
  // let count = 0;

  // let jewelsCodes = jewels.split("");
  // let stonesCodes = stones.split("");

  // for(let prop of jewelsCodes) {
  //   for(let el of stonesCodes) {
  //     if(el === prop) {
  //       count++;
  //     }
  //   }
  // }
  // return count;
// START
// var numJewelsInStones = function(jewels, stones) {
//   let set = new Set();
//   jewels.split('').forEach(jewel => {
//     set.add(jewel);
//   });
//   let count = 0;
//   stones.split('').forEach(stone => {
//     if (set.has(stone)) count++;
//   });
//   return count;
// };
// STOP I kind of understand this one
// START Fastest time solution
// var numJewelsInStones = function(jewels, stones) {
//   let stonesMap = new Map()
//   let res = 0
//   for(let stone of stones){
//       if(stonesMap.get(stone) != undefined){

//           let val = stonesMap.get(stone) + 1
//           stonesMap.set(stone,val)
//       }else{
//           stonesMap.set(stone, 1)
//       }

//   }

//   for(let jewel of jewels){
//       if(stonesMap.get(jewel) != undefined){
//           res += stonesMap.get(jewel)
//       }
//   }
//   return res
// };
// STOP

  // for (let i = 0; i < jewelsCodes.length; i++) {
  //   if (jewelsCodes.indexOf(stonesCodes[i]) > -1) {
  //     count++;
  //   }
  // }
  // return count;
  // for (i = 0; i < jewels.length; i++) {

  //    jewelsCodes.push(jewels.charCodeAt(i));
  // }
  // for (j = 0; j < stones.length; j++) {

  //    stonesCodes.push(stones.charCodeAt(j));
  // }
  // if (jewelsCodes.every(r=> stonesCodes.includes(r))) {
  //   count++;
  // }
  // return count;
  // console.log(stonesCodes);
  // console.log(jewelsCodes);
  // console.log(count);
};

numJewelsInStones("eabcde", "apoiuy");
numJewelsInStones("eabcde", "eabcde");
numJewelsInStones("eabcde", "ea");
numJewelsInStones("ap", "apoiuy");
numJewelsInStones("aA", "aAAbbbb");