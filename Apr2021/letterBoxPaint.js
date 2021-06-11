var paintLetterboxes = function(start, end) {
    let mapping = {
        0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,
    }
    let array = [];
    for (let i = start; i <= end; i++) {
        array.push(i);
    }
    array.join("").split("").reduce((acc,curr) => {
        mapping[curr] ? mapping[curr]++ : mapping[curr] += 1;
        return acc;
    },{});
    return Object.values(mapping)
    // for (let i = 0; i < 10; i++) {
    //     mapping[i] ? mapping[i] : mapping[i] = 0;
    // }
    // return array.join("").split("")
  }

  console.log(
    paintLetterboxes(125, 132),// [1,9,6,3,0,1,1,1,1,1]);
  )