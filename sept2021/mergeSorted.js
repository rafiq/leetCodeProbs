function mergeSort(array) {
    if (array.length === 1) return array;
    let mid = Math.floor(array.length / 2);
    let result = [];
    let copy1 = array.slice(0,mid);
    let copy2 = array.slice(mid);

    copy1 = mergeSort(copy1);
    copy2 = mergeSort(copy2);

    return merge(copy1,copy2)
}

function merge(arr1, arr2) {
    // let longer = Math.max(arr1.length,arr2.length) === arr1.length ? arr1 : arr2;
    // let shorter = arr1.length === longer.length ? arr2 : arr1;

    // let result = []// Array(arr1.length + arr2.length).fill(0);
    // let l = 0;
    // let r = 0;
    // // return [longer, shorter]
    // while (l < longer.length + shorter.length) {
    //     console.log(shorter[r],longer[l])
    //     if (longer[l] < shorter[r] || longer[l] === shorter[r] && longer[l]) {
    //         result.push(longer[l])
    //         l++
    //     } else if (shorter[r]) {
    //         result.push(shorter[r])
    //         r++
    //     } else {
    //         continue;
    //     }

    // }

    // return result;

        const copy1 = arr1.slice();
        const copy2 = arr2.slice();
        const result = [];

        while (copy1.length > 0 && copy2.length > 0) {
          result.push(copy1[0] <= copy2[0] ? copy1.shift() : copy2.shift());
        }

        return result.concat(copy1.length === 0 ? copy2 : copy1);

}

console.log(
//     merge([1, 5, 9], [2, 6, 8]),      // [1, 2, 5, 6, 8, 9]
// merge([1, 1, 3], [2, 2]),         // [1, 1, 2, 2, 3]
// merge([], [1, 4, 5]),             // [1, 4, 5]
// merge([1, 4, 5], []),             // [1, 4, 5]
mergeSort([9, 5, 7, 1]),           // [1, 5, 7, 9]
mergeSort([5, 3]),                 // [3, 5]
mergeSort([6, 2, 7, 1, 4]),        // [1, 2, 4, 6, 7]

mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']),
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]),
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]
)