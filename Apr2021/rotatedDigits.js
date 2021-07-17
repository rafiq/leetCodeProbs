/**
 * @param {number} N
 * @return {number}
 */
 var rotatedDigits = function(N) {
    var start = 1;
    var cnt = 0;
    var map = {
        '1': 1,
        '0': 0,
        '8': 8,
        '2': 5,
        '5': 2,
        '6': 9,
        '9': 6
    };

    function rotate(n) {
        var rotated = [];

        while (n > 0) {
            var t = n % 10;
            if (t in map) {
                rotated.push(map[t]);
            } else {
                return 0;
            }
            n -= t;
            n /= 10;
        }

        rotated.reverse();

        return parseInt(rotated.join(''));
    }

    while (start <= N) {
        var rotated = rotate(start);
        // console.log(rotated, start);
        if (rotated !== 0 && rotated !== start) {
            ++cnt;
        }
        ++start;
    }

    return cnt;
};
//  var rotatedDigits = function(N) {
//      let count = 0;

//      for (let i = 1; i <= N; i++) {
//         if (isRotated(i)) {
//             count++;
//         }
//      }
//      return count;
//     };
//     function isRotated(num) {
//         let mapping = {
//             0:0,1:1,2:5,5:2,6:9,8:8,9:6
//         }
//         let rotatedNums = "0125689"
//         if ( !num.toString().split("").every(digit => rotatedNums.includes(digit))) {
//             return false;
//         }
//         else if (Number(num.toString().split("").reduce((acc,curr) => {
//             acc += mapping[curr];
//             return acc;
//         },"")) === num) {
//             return false;
//         } else {
//             return true;
//         }
//     }
//     function rotateNums(num) {
//         return num.toString().split("")
//     }
    console.log(
        rotatedDigits(10),
        rotatedDigits(1),
        rotatedDigits(0),
        )
        // let mapping = {
            //     0:0,1:1,2:5,5:2,6:9,8:8,9:6
            // }
            // return Number(1..toString().split("").reduce((acc,curr) => {
                //     acc += mapping[curr];
                //     return acc;
                // },"")) === 1

                //  let rangeArray = new Array(N).fill(0).reduce((acc,curr,idx) => {
                //     if (+(idx + 1).toString().split("").map(el => {
                //         if (mapping[el]) mapping[el]
                //         else return false;
                //     }).join("") !== idx + 1) {
                //         count++;
                //     }
                // },0)

                       // if (+(i + 1).toString().split("").map(el => mapping[el]).join("") !== i + 1) {
        //     count++;
        //     console.log(+(i + 1).toString().split("").map(el => mapping[el]).join(""));
        // }