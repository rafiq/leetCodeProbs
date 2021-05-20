/**
 * @param {string[]} logs
 * @return {string[]}
 */
 var reorderLogFiles = function(logs) {
    let digitLogs = [], wordLogs = [];
    for (let log of logs) {
        let arr = log.split(" ");
        if (isNaN(arr[1])) wordLogs.push({id: arr.slice(0,1), body: arr.slice(1).join(" ")});
        else digitLogs.push(log);
    }
    wordLogs.sort((log1,log2) => {
        if (log1.body < log2.body) return -1;
        if (log1.body > log2.body) return 1;
        if (log1.id < log2.id) return -1;
        if (log1.id > log2.id) return 1;
    })
    let sortedWordLogs = wordLogs.map(log => `${log.id} ${log.body}`);
    return sortedWordLogs.concat(digitLogs);
//   ! This was a lot harder than expected, but the really only difficult part was the sort bit which I think the solution above does a great job handeling by making the lettersArray into a object with one key the "id" which points to the identifier and then one key "body" which points to the rest of the text. Then the answer goes about manually sorting in JS which requires letting the code know where they need to put a value less than or above another value.
    // let digitsArray = [];
    // let letterArray = [];

    // for (let log of logs) {
    //     if (!isNaN(log.split(" ")[1])) digitsArray.push(log)
    //     else letterArray.push(log)
    // }
    // // return digitsArray;
    // return letterArray.sort()
};
console.log(
    reorderLogFiles(["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]),// ["let1 art can","let3 art zero","let2 own kit dig","dig1 8 1 5 1","dig2 3 6"])
)