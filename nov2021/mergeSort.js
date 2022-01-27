function mergeSort(array) {
    if (array.length <= 1)  return array;

    let mid = Math.floor(array.length / 2);
    let left = array.slice(0,mid);
    let right = array.slice(mid);

    const mergeHelper = (left, right) => {
            let result = [];
        while (left.length && right.length) {
            if (left[0] < right[0]) {
                result.push(left.shift())
            } else {
                result.push(right.shift())
            }
        }
        return result.concat(left.slice()).concat(right.slice());
    }

    return mergeHelper(mergeSort(left),mergeSort(right));
}

console.log(
    mergeSort([2,3,0,512,13,3,5,51,])
);