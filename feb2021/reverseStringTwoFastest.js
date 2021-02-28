// The below is the fastest answer and I was thinking this, but didn't get it correct
var reverseStr = function(s, k) {
    let result = "";
   for (let i = 0; i < s.length; i += 2*k) {
     let chunk1 = s.substr(i, k);
     // reverse first half
     chunk1 = chunk1.split("").reverse().join("");
     let chunk2 = s.substr(i+k, k);
     result += chunk1 + chunk2;
   }
   return result;
 };

//This one is a little more complex than an easy answer.

var reverseStr = function(s, k) {
    const split = s.split('');
    for(let i = 0; i < split.length; i+= 2*k){
        const reverse = split.splice(i, k).reverse()
        split.splice(i, 0, ...reverse);
    }
    return split.join('')
};

// Below is second fastest answer
const reverseStr = (s, k) => {
    let answer = ""
    const recursiveReverse = (string, interval) => {
        if (string.length === 0) return answer
        if (string.length < interval) {
            answer += string.split("").reverse().join("")
            return string.split("").reverse().join("")
        }
        const current = string.slice(0, interval)
        const currentDoubled = string.slice(0, 2*interval)
        if (currentDoubled.length < 2*interval && currentDoubled.length > interval) {
            answer += current.split("").reverse().join("") + string.slice(interval)
            return answer
        } else {
            answer += current.split("").reverse().join("") + string.slice(interval, 2*interval)
            return recursiveReverse(string.slice(2*interval), interval)
        }
    }
    recursiveReverse(s,k)
    return answer
};
// Third fastest
var reverseStr = function(s, k) {
    const doubleK = 2 * k ;
    let sArray = s.split("");
    const numberOfSequences = Math.ceil(sArray.length/doubleK);
    let startingIndexes = [];
    for(let index = 0 ;index < numberOfSequences ;index++){
        let value = doubleK * index;
        startingIndexes.push(value);
    }
    sArray.forEach((item,itemIndex)=>{
        const isIndexExist = startingIndexes.includes(itemIndex);
        if(isIndexExist){
            let itemsSliced = sArray.slice(itemIndex,itemIndex+k);
            itemsSliced.reverse();
            sArray.splice(itemIndex,itemsSliced.length,...itemsSliced)


        }

    })
    return sArray.join('');
    // console.log(startingIndexes)
    // console.log(sArray)
};