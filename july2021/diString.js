/**
 * @param {string} s
 * @return {number[]}
 */
 var diStringMatch = function(s) {

    let i = 0, j = s.length;
    let res = [];
    s.split("").forEach(x => {
        if (x == 'I') {
            res.push(i);
            i++;
        } else {
            res.push(j);
            j--;
        }
    });
    res.push(i);
    return res;
    // let result = Array(s.length + 1).fill(0)

    // for (let i = 0; i < result.length ; i++) {
    //     if (s[i] === "I") {
    //         result[i + 1] += i + 3
    //     }
    //     if (s[i] === "D") {
    //         result[i + 1] -= i - 3
    //     }
    // }

    // return result
};
console.log(
    diStringMatch("IDID"),
    diStringMatch("III")
    // diStringMatch("IDID")
    )
    // const diStringMatch=s=>{
    //     let result=[]
    //     let small=0
    //     let large=s.length
    //     for(let i=0;i<=s.length;i++){
    //         if(s[i]==='I'){
    //             result[i]=small
    //             small++
    //         }
    //         else if(s[i]==='D'){
    //             result[i]=large
    //             large--
    //         }
    //         else{
    //             if(s[i-1]==='D')result[i]=large--
    //             else result[i]=small--
    //         }
    //     }
    //     return result
    // }