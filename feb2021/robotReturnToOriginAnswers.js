// Here is a nice answer that is using the object like I did. However, they created there hash table with all the variables equal to zero. Therefore, in the end they would have to subtract the values of the horizontal movements and see if it is equal to zero. And, they would have to subtract all the vertical movements and see if that equals zero as well. That is interesting how they used a double not sign. What does that mean?


var judgeCircle = function(moves) {
    var holder={R:0,L:0,U:0,D:0}
    for(var i=0;i<moves.length;i++){
        holder[moves[i]]++
    }
    return !!(holder['R']-holder['L']==0&&holder['U']-holder['D']==0)
};


// Below is a cool answer that uses match and regex
var judgeCircle = function(moves) {
    l = (moves.match(/L/g)||[]).length;
    r = (moves.match(/R/g)||[]).length;
    u = (moves.match(/U/g)||[]).length;
    d = (moves.match(/D/g)||[]).length;

    return l == r && u == d;
};
