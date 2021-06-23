
function sc(width, length, gap){
    let perimeter = (width * 2) + (length * 2) - 4;
    let treePlusGap = 1 + gap;
    let trees = perimeter / treePlusGap;

    return (trees % 1 !== 0) ? 0 : trees;
  }
console.log(
    sc(3,3,1),// 4);
    sc(3,3,3),// 2);
    sc(3,3,2),// 0);
    sc(7,7,3),// 6);
    sc(3,3,0),// 8);
    sc(3,3,10),// 0);
)