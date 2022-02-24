/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum = function(candidates, target) {
    // let result = []



    // return result

    const res = [];
  const helper = (comb, t, i) => {
    if (t === 0) return res.push(comb);
    for (let j = i; j < candidates.length; j++) {
      if (candidates[j] <= t) helper([...comb, candidates[j]], t - candidates[j], j);
    }
  };
  helper([], target, 0);
  return res;

  let resultArr = new Array();

  function helper(candidates, target, combinationArr, index){

      //as we know if we keep subtracting the target
      //in any point in time, we get negative target, that means, there's no point in keep adding the element so just return
      //the sum of the elements inside the candidates array would just be greater than target anyway
      if(target < 0)
          return
      if(target == 0){
          resultArr.push([...combinationArr]);
          return;
      }

      //starting at 'index' as we want to keep recursing over one element multiple time
      //we pass down 'i' for index while recursing over and over until the returned to have that multiple recurring effect over an element
      for(let i = index; i < candidates.length; i++){
          //choose
          combinationArr.push(candidates[i]);

          //explore
          helper(candidates, target-candidates[i], combinationArr, i);

          //unchoose
          combinationArr.pop();
      }

  }
  helper(candidates, target, new Array(), 0);

  return resultArr;
};
console.log(
    combinationSum()
);