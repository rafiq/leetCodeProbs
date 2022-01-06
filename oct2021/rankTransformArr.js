/**
 * @param {number[]} arr
 * @return {number[]}
 */
 var arrayRankTransform = function(arr) {

    // let hash = {}
    // let sortedArray = arr.slice().sort((a,b) => a - b);

    // for (let i = 0; i < sortedArray.length; i++){
    //     if (hash[sortedArray[i]]) {
    //         i--;
    //         continue;
    //     } else {
    //         hash[sortedArray[i]] = i + 1;
    //         // i++;
    //     }
    // }

    // return arr.slice().map(el => el = hash[el]);
    let sorted=[...arr].sort((a,b)=>a-b)
  let mp=new Map()
  let k=1
  sorted.forEach(x=>{
    mp.has(x) ? k-- : mp.set(x,k)
    k++
  })
  let result=arr.map(x=>mp.get(x))
  return result
};
console.log(
    arrayRankTransform([40,10,20,30]),//[4,1,2,3]
);