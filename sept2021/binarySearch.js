const yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];

function binarySearch(haystack, needle) {
    // if (haystack === needle) return haystack.indexOf(needle);
    let mid = Math.floor(haystack.length - 1 / 2);

    // let copyArray = haystack.slice();

    if (haystack[mid] === needle) return haystack.indexOf(needle);
    else if (needle < haystack[mid]) return binarySearch(haystack.slice(mid + 1),needle);
    else return binarySearch(haystack.slice(0,mid),needle)

    // return haystack
}
console.log(
binarySearch(yellowPages, 'Pizzeria'),                   // 7
binarySearch(yellowPages, 'Apple Store'),                // 0

binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77),    // -1
binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89),    // 7
binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5),     // 1

binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter'),  // -1
binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler'),  // 6
)

// LS Answer from Herve
function binarySearch(array, search, idx = 0) {
    if (array.length === 0 || array[0] > search) return -1;
    let middle = Math.floor((array.length - 1) / 2);

    if (array[middle] === search) return middle + idx;

    if (array[middle] > search) {
      return binarySearch(array.slice(0, middle), search, idx);
    } else {
      idx += middle + 1;
      return binarySearch(array.slice(middle + 1), search, idx);
    }
  }