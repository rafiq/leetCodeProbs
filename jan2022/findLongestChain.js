/**
 * @param {number[][]} pairs
 * @return {number}
 */
 var findLongestChain = function(pairs) {

    // pairs = pairs.sort((a,b) => {
    //     if (a[1] < b[1]) return -1;
    //     // if (a[1] < b[1]) return -1;
    // })
    // let longest = 0;
    // let dp = Array(pairs.length).fill(1);

    // for (let i = 1; i < pairs.length; i++) {
    //     for (let j = 0; j < i; j++) {
    //         if (pairs[j] < pairs[i] && dp[j] <= dp[i]) {
    //             dp[i] = Math.max(dp[i] + 1, dp[j])
    //         }
    //         longest = Math.max(dp[i],longest);
    //     }
    // }
    // return longest;

    pairs.sort((a,b) => a[0] - b[0]);

    let dp = new Array(pairs.length);
    for (let i = 0; i < pairs.length; i++) {
        let lenOfChain = 1;
        for (let j = 0; j < i; j++) {
            if (pairs[j][1] < pairs[i][0]) {
                lenOfChain = Math.max(lenOfChain, dp[j] + 1);
            }
        }
        dp[i] = lenOfChain;
    }
    return Math.max(...dp);

    // Single loop
    pairs.sort((a,b)=>{
        if(a[1]>b[1]){
            return 1
        }else{
            return -1
        }
    });

    let a = 0
    let b = -1000
    // somebody destructured this by doing
    for (let [x,y] in pairs) {
        if (x > b) {
            a++;
            b = y;
        }
    }
        return a
        // /////////////////////////////////


    let c=1;
    let prev=pairs[0][1]
    for(let i=1;i<pairs.length;i++){
        if(pairs[i][0]>prev){
            c++;
            prev =pairs[i][1]
        }
    }
    return c;
};
console.log(
    findLongestChain([[1,2],[7,8],[4,6],[8,7],[6,5],[9,7]])
);