/**
 * @param {string} moves
 * @return {boolean}
 */
let verticalNumbers = {
    R:1,L:-1
}
let horizontalNumbers = {
    U:1,D:-1
}
var judgeCircle = function(moves) {
    // let array = moves.split("");
    // let verticalSum = 0;
    // let horizontalSum = 0;

    // return array.reduce((_,letter) => {
    //     if (letter === "R" || letter === "L") {
    //         verticalSum += verticalNumbers[letter]
    //     } else {
    //         horizontalSum += horizontalNumbers[letter]
    //     }
    //     return !(verticalSum) && !(horizontalSum);
    // },0);
    let x = 0;
    let y = 0;

    for(let i=0;i<moves.length;i++){
        let move = moves[i];

        switch (move) {
            case "L":
                x--;
                break;
            case "R":
                x++;
                break;
            case "U":
                y++;
                break;
            case "D":
                y--;
                break;

            default:
                break;
        }
     }

    return (x === 0 && y === 0) ? true : false;

};

console.log(
    judgeCircle("UD"),//true;
    judgeCircle("LL"),//false;
    judgeCircle("RRDD"),//false;
    judgeCircle("LDRRLRUULR"),//false;

)
// 657. Robot Return to Origin

// There is a robot starting at position (0, 0), the origin, on a 2D plane. Given a sequence of its moves, judge if this robot ends up at (0, 0) after it completes its moves.

// The move sequence is represented by a string, and the character moves[i] represents its ith move. Valid moves are R (right), L (left), U (up), and D (down). If the robot returns to the origin after it finishes all of its moves, return true. Otherwise, return false.

// Note: The way that the robot is "facing" is irrelevant. "R" will always make the robot move to the right once, "L" will always make it move left, etc. Also, assume that the magnitude of the robot's movement is the same for each move.
