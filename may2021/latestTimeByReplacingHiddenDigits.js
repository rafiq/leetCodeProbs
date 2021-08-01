/**
 * @param {string} time
 * @return {string}
 */
 var maximumTime = function(time) {
    let [a,b,_,c,d] = time.split('')
    if(a === '?'){
        b > 3 ? a = "1" : a = "2"
    }
    if(b === '?') {
        a === "2" ? b = 3 : b = 9;
    }
    if(c === '?') c = 5
    if(d === '?') d = 9
    return `${a}${b}:${c}${d}`
    // ! My code below worked but was 50%
    // for (let i = 0; i < time.length; i++) {
    //     if (time[i] === "?") {
    //         if (time[0] === "2") {
    //                 if (i === 0) time = time.replace("?",2);
    //                 if (i === 1) time = time.replace("?",3);
    //                 if (i === 3) time = time.replace("?",5);
    //                 if (i === 4) time = time.replace("?",9);
    //             } else if (time[0] === "?" && time[1] > 3) {
    //                 time = time.replace("?",1)
    //             } else if (time[0] === "?" && time[1] < 4) {
    //                 time = time.replace("?",2)
    //             } else {
    //                 if (i === 0) time = time.replace("?",2);
    //                 if (i === 1) time = time.replace("?",9);
    //                 if (i === 3) time = time.replace("?",5);
    //                 if (i === 4) time = time.replace("?",9);
    //             }
    //     }

    // }
    // return time
 }
console.log(
    maximumTime("2?:?0"),//"23:50"
    maximumTime("?0:15"),//"20:15
    maximumTime("0?:3?"),//"09:39"
    maximumTime("1?:22"),//"19:22"
    maximumTime(
        "?4:03"),//"14:03
)
// !  A nice solution using destructuring which is always super simple and sweet.
// let [a,b,_,c,d] = time.split('')
//     if(a==='?'){
//         // if(b>3) a = '1'; else a = '2'
//         b > 3 ? a = "1" : a = "2"
//     }
//     if(b==='?') {
//         if(a==='2') b = 3; else b = 9 ;
//     }
//     if(c==='?') c=5
//     if(d==='?') d=9
//     return `${a}${b}:${c}${d}`