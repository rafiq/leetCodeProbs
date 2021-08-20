/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
 var addToArrayForm = function(num, k) {

    // if (num.join("") > Number.MAX_SAFE_INTEGER) {

    // }
    return String((BigInt(num.join("")) + BigInt(k))).split("").map(el => +el)
};
console.log(
    addToArrayForm([1,2,0,0],34),//[1,2,3,4])
    addToArrayForm([2,7,4], 181),//[4,5,5]
    addToArrayForm([2,1,5],  806),//[1,0,2,1]
    addToArrayForm([1,2,6,3,0,7,1,7,1,9,7,5,6,6,4,4,0,0,6,3]
        ,516),//[1,2,6,3,0,7,1,7,1,9,7,5,6,6,4,4,0,5,7,9]
)

// Here is the computational answer that really requires me to sit down and read through it and figure it out step by step because I am missing something here.
var addToArrayForm = function(A, K) {
    let i = A.length - 1
    let carry = 0
    while (K>0 || carry > 0) {
        let num = K % 10
        if (i >= 0) {
            let newVal = (A[i] + carry + num) % 10
            carry = Math.floor((A[i] + carry + num)/10)
            A[i] = newVal
        } else {
            A.unshift((num+carry)%10)
            carry = Math.floor((num+carry)/10)
        }
        K = Math.floor(K/10)
        i--
    }
    return A
};

var addToArrayForm = function(A, K) {
    let flag = A.length - 1
    while(K) {
        if(flag < 0) {
            A.unshift(K % 10)
        } else {
            K += A[flag]
            A[flag--] = K % 10
        }
        K = Math.floor(K / 10)
    }
    return A
}