// This is the fastest answer and it is interesting because this is using the set method which does not allow any duplicates, and apparently it is pretty fast. I don't see where the s set is created from the arr? I guess it is in line seven where it is "set" and it is set in relation to its index as well which is another cool feature of set.

var checkIfExist = function(arr) {
    let s = new Map();
    for(let i = 0; i< arr.length; i++){
        if(s.has(arr[i]/2) || s.has(arr[i]*2)){return true;}
        s.set(arr[i], i);
    }return false;
};

// The code below seems close to mine since it also uses a nested for loop, but they were able to get the same logic by 1) not allowing j and i to hit the same number by having j assigned to i + 1 which is genius. Then it also used a or statement which allows for looking bi directionally at the two choices. I didn't include this in my code, but mine worked all the same which is weird?
var checkIfExist = function(arr) {
    for(let i=0; i<arr.length; i++){
      for(let j=i+1; j<arr.length; j++){
        if(arr[i] === 2 * arr[j] || arr[j] === 2 * arr[i]) {
          return true
        }
      }
    }
  return false;
};
// This is an interesting answer below which uses another array to push in each element but doubled and it also checks at the same time if that elements exists already in the new array. If it does, then it returns false. I still don't understand why they need to check for numHalf? The array will be the original numbers or the doubles of the original numbers. Thats it right?
var checkIfExist = function(arr) {

    let checker = [];

    for(let i = 0; i < arr.length; i+=1){
        let numDouble = arr[i] * 2;
        let numHalf = arr[i] / 2

        if(checker.includes(numDouble) || checker.includes(numHalf)){
            return true;
        }else{
            checker.push(arr[i]);
        }
    }

    return false;


};