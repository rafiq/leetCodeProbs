var minScoreTriangulation = function(A) {
    let length = A.length;
    let dp = [];
    for (let i = 0;  i < length; i++)
        dp[i] = new Array(length);
    for (let gap = 0; gap < length; gap++) {
        for (let i = 0, j = gap; j < length; i++, j++) {
            if (j < i+2) {
                dp[i][j] = 0;
            } else {
                dp[i][j] = Infinity;
                for (let k = i+1; k < j; k++) {
                    let cost = dp[i][k] + dp[k][j] + A[i]*A[k]*A[j];
                    dp[i][j] = Math.min(dp[i][j], cost);
                }
            }
        }
    }
    return dp[0][length-1];
};

var minScoreTriangulation = function(A) {
    let dp = Array(A.length+1).fill(-1).map(()=>Array(A.length+1).fill(-1))
       return fun(A,1,A.length-1,dp)
   };
   let fun = function(A,i,j,dp){
     if(i>=j){
       return 0
     }
       if(dp[i][j]!==-1){
           return dp[i][j]
       }
     let min = Number.MAX_VALUE
     for(let k =i;k<=j-1;k++){
          let temp  = fun(A,i,k,dp)+fun(A,k+1,j,dp)+A[i-1]*A[k]*A[j]
         if(temp<min){
           min =temp
         }
     }
     dp[i][j]= min
       return min
   }

   var minScoreTriangulation = function(A) {
    let length = A.length;
    let dp = [];
    for (let i = 0;  i < length; i++)
        dp[i] = new Array(length);
    for (let gap = 0; gap < length; gap++) {
        for (let i = 0, j = gap; j < length; i++, j++) {
            if (j < i+2) {
                dp[i][j] = 0;
            } else {
                dp[i][j] = Infinity;
                for (let k = i+1; k < j; k++) {
                    let cost = dp[i][k] + dp[k][j] + A[i]*A[k]*A[j];
                    dp[i][j] = Math.min(dp[i][j], cost);
                }
            }
        }
    }
    return dp[0][length-1];
};





