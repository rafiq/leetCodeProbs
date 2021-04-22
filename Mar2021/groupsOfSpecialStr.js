/**
 * @param {string[]} A
 * @return {number}
 */
 var numSpecialEquivGroups = function(A) {

//    ?Solution two
   return A.reduce((prev, curr) => {
    let left = "";
    let right = "";

    for (let i=0; i<curr.length; i++) {
      i % 2 === 0 ? left += curr[i] : right += curr[i];
    }
    left = [...left].sort().join("");
    right = [...right].sort().join("");

    for (let i = 0; i < prev.length; i++) {
        if (prev[i][0] === left && prev[i][1] === right) {
            return prev
        }
    }
    prev.push([left,right]);
    return prev;
}, []).length;
};
console.log(
    numSpecialEquivGroups(["abcd","cdab","cbad","xyzz","zzxy","zzyx"]),//3
)
var numSpecialEquivGroups = function(A) {
    const groupSet = new Set();
 A.forEach(a => groupSet.add(transform(a)));
 return groupSet.size;
};

const transform = S => {
 const even = S.split('').filter((_, i) => i % 2 === 0);
 const odd = S.split('').filter((_, i) => i % 2 === 1);
 even.sort();
 odd.sort();
 return `${even.join('')}${odd.join('')}`;
};
//
var numSpecialEquivGroups = function(A) {
    let groups = new Set();

    for (let i = 0; i < A.length; i++) {
        let even = [];
        let odd = [];

        for (let j = 0; j < A[i].length; j++) {
            if (j % 2 === 0) even.push(A[i][j]);
            else odd.push(A[i][j]);
        }
        let str = even.sort().join('') + odd.sort().join('');

        groups.add(str);
    }
    return groups.size;
};