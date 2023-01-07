function printDups(arr) {
    let result = [];
    let cache = new Map();

    for (let el of arr) {
        if (cache.has(el)) {
            result.push(el);
        } else {
            cache.set(el,true);
        }
    }
    for (let el of result) {
        console.log(el)
    }
}

printDups(["c","a","b","a"])
//T:O(n) because we have to go through every element of the input array
//S:O(n) since I am using a cache which could be the entire set if there are no duplicates