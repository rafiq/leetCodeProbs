function alphabetWar(fight)
{
    const leftSide = {
        w :4,
        p :3,
        b :2,
        s :1
    }
    const rightSide = {
        m:4,
        q:3,
        d:2,
        z:1,
    }
    let leftPoints = 0;
    let rightPoints = 0;

    fight.split("").forEach(letter => {
        if (leftSide[letter]) leftPoints += leftSide[letter];
        if (rightSide[letter]) rightPoints += rightSide[letter];
    })
    return rightPoints > leftPoints ? "Right side wins!" : leftPoints > rightPoints ? "Left side wins!" : "Let's fight again!";
//    return "Let's fight again!";
}
console.log(
    alphabetWar("z"),// "Right side wins!" );
    alphabetWar("zdqmwpbs"),// "Let's fight again!" );
    alphabetWar("zzzzs"), //"Right side wins!" );
    alphabetWar("wwwwww"),// "Left side wins!" );
)

// THis is a pretty smooth way of doing this problem
function alphabetWar(fight) {
    let map = { w: -4, p: -3, b: -2, s: -1, m: 4, q: 3, d: 2, z: 1 };
    let result = fight.split('').reduce((a, b) => a + (map[b] || 0), 0);
    return result ? (result < 0 ? "Left" : "Right") + " side wins!" : "Let's fight again!";
}