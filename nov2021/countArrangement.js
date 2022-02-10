/**
 * @param {number} n
 * @return {number}
 */
 var countArrangement = function(n) {
    // let count = 0;
    // let range = new Array(n).fill(0).map((_,idx) => idx + 1)

    // for (let i = 1; i <= range.length; i++) {
    //     if (range[i] % i === 0 || i % range[i] === 0 ) {
    //         count++;
    //     }
    // }

    // return  count;

    let map = new Map();
    let used = {};
    let arr = [];
    const backTrack = (i=1)=>{
        for(let j=1;j<=n;j++){
            if((i%j===0 || j%i===0) && !used[j]) {
                arr.push(j);
                used[j] = true;
                if(arr.length===n){
                    map.set(arr.slice(),true);
                }else{

                    backTrack(i+1);
                }
                delete used[j];
                arr.pop();
            }
        }
    }
    backTrack();
    return map.size

};
console.log(
    countArrangement(2),//2
    countArrangement(3),//3 [1,2,3]
);