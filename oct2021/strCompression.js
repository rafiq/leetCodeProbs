/**
 * @param {character[]} chars
 * @return {number}
 */
 var compress = function(chars) {
    // let result = 0;
    // let currCount = 0;
    // let start = 0;
    // let i = 0;

    // while (i < chars.length) {

    //     currCount++;
    //     console.log(currCount)

    //     if (chars[i] !== chars[i + 1] && currCount > 1) {
    //         chars.splice(start + 1, i - start, String(currCount))
    //         start = i + 2;
    //         // i++;
    //         result += 1;
    //         result += String(currCount).length;
    //         currCount = 0;
    //     }
    //     if (chars[i] !== chars[i + 1] && currCount === 1) {
    //         chars.splice(start + 1, 0, String(currCount))
    //         start = start + 2;
    //         i++
    //         result += 1;
    //         currCount = 0;
    //     }
    //     i++
    //     console.log(chars[i],result);
    // }

    // return (chars);
    let start = 0, end = 0;
    while (end < chars.length) {
        if (chars[end] == chars[end+1]) end++;
        else {
            let len = end-start+1; // number of letters
            if (len == 1) {
                start++, end++;
                continue;
            }

            chars.splice(start+1, len-1, ...len.toString().split(""));
            end -= len - 1 - len.toString().length;
            // move backwards as much as the number of letters
            // except for one letter char and length chars

            start = end; // bring start pointer to end pointer
            start++, end++; // move both pointers to new letter
        }
    }
    return chars.length;
};
console.log(
    compress(["a","a","a","b","b","a","a"]),//6
    compress(["a","b","b","b","b","b","b","b","b","b","b","b","b"]),//4
);