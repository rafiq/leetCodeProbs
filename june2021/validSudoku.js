/**
 * @param {character[][]} board
 * @return {boolean}
 */
 var isValidSudoku = function(board) {

    // for (let i = 0; i < board.length; i++) {
    //     if (!isOneToNine(board[i])) return false;
    //     for (let j = 0; j < board.length; j++) {

    //         if ()
    //     }
    // }

    // return isOneToNine(board[0]);


        for(let i=0; i<9; i++) {
            if(!isOneToNine(board[i])) return false
        }

        for(let i=0; i<9; i++) {
            let arr = [];
            for(let j=0; j<9; j++) {
                arr.push(board[j][i]);
            }
            if(!isOneToNine(arr)) return false;
        }

        let row = [[0,1,2], [3,4,5], [6,7,8]]
        let col = [[0,1,2], [3,4,5], [6,7,8]]
        for(let i of row) {
            for(let j of col) {
                let arr = [];
                for(let num1 of i) {
                    for(let num2 of j){
                        arr.push(board[num1][num2]);
                    }
                }
                if(!isOneToNine(arr)) return false;
            }
        }
        return true
};
function isOneToNine(arr) {
    // let arrMap = {};

    // for (let i = 0; i < arr.length; i++) {
    //     if (arrMap[arr[i]] && +arr[i] > 0 && +arr[i] < 10) {
    //         return false
    //     } else {
    //         arrMap[arr[i]] = 1;
    //     }
    // }

    // return true

    let set1 = new Set();
    for(let i=0; i< arr.length; i++) {
        if(arr[i] === '.') continue;
        if(set1.has(arr[i])) return false
        set1.add(arr[i]);
    }
    return true
}
console.log(
    isValidSudoku(
    [["5","3",".",".","7",".",".",".","."]
    ,["6",".",".","1","9","5",".",".","."]
    ,[".","9","8",".",".",".",".","6","."]
    ,["8",".",".",".","6",".",".",".","3"]
    ,["4",".",".","8",".","3",".",".","1"]
    ,["7",".",".",".","2",".",".",".","6"]
    ,[".","6",".",".",".",".","2","8","."]
    ,[".",".",".","4","1","9",".",".","5"]
    ,[".",".",".",".","8",".",".","7","9"]]),//true
)