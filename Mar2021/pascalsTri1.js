/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    if (rowIndex === 0) return [1];
    if (rowIndex === 1) return [1,1];
    let row = [1,1];
    let i = 2;

    while (i <= rowIndex) {
            row = Array(row.length + 1).fill(1).reduce((acc,curr,idx) => {
                if (idx === 0) acc.push(curr)
                else if (idx === row.length) acc.push(curr)
                else acc.push(row[idx - 1] + row[idx]);
                return acc;
        },[]);
        i++;
    }
    return row;
    // return Array(rowIndex + 1).fill(1).reduce((acc,curr,idx,arr) => {
    //     if (idx === 0) acc.push(1)
    //     else if (idx === arr.length - 1) acc.push(1)
    //     else acc.push(row[idx - 1] + row[idx]);

    //     return acc;
    // },[])
    // while (rowIndex > 0) {
        // return row.reduce((acc,curr,idx,arr) => {

        //     if (idx === 0) acc.push(1)
        //     if (idx === arr.length - 1) acc.push(1)

        //     return acc;
        // },[])
    // }
    // return row.
};

console.log(
    getRow(5),//[1,3,3,1]
    // getRow(0),//[1]
    // getRow(1),//[1,1]
    // getRow(2),//[1,2,1]
)