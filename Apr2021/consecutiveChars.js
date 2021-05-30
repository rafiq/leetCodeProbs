/**
 * @param {string} s
 * @return {number}
 */
 var maxPower = function(s) {
    let max = 0, temp = 1;
    for(let i = 1; i<s.length; i++){
      if(s[i-1] == s[i]){
        temp++;
      }else{
        if(max<temp)
          max = temp;
        temp = 1;
      }
    }
  if(max<temp)
    max = temp
  return max;
    // let result = 0;
    // let start = 0;
    // let end = 0;

    // for (let i = 1; i < s.length; i++) {
    //     if (s[i] === s[i - 1]) {
    //         start = i - 1;
    //         if (s[i] !== s[i - 1]) {

    //         }
    //     }
    // }
    // return result;
    // return s.split("").reduce((acc,curr) => {
    //     acc[curr] ? acc[curr]++ : acc[curr] = 1;
    //     return acc;
    // },{})
};
console.log(
    maxPower("leetcode"),//2
    maxPower("abbcccddddeeeeedcba"),//5
    maxPower("triplepillooooow"),//5
    // maxPower("leetcode"),//2
)