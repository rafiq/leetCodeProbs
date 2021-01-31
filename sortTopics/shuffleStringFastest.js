// var restoreString = function(s, indices) {
//     let coll = [];
//     for (let i = 0; i < indices.length; i++) {
//         coll.push(res = s.charAt(indices.indexOf(i)));
//     }
//     return coll.join('');
// };

// console.log(restoreString())

// The top is the fastest answer from the possible answers, however, below is the second fastest answer and I feel that it is what I was trying to do in my first attempt when I wanted to use forEach or the map methods, but it was coming out wrong. I think the difference is that they turned the string into an array before using the method.


var restoreString = function(s, indices) {
    let res = []
    let charArr = Array.from(s)
    charArr.forEach((char, i) => {
        res[indices[i]] = charArr[i]
    })

    return res.join('')
}
restoreString("codeleet",[4,5,6,7,0,2,1,3]);
restoreString("aiohn",[3,1,4,2,0]);