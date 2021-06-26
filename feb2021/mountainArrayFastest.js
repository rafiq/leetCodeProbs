// Here is the fastest code and it is very easy to read as well which is surprising. They used a couple variables set to false that keep track if the mountain has increased or not.
var validMountainArray = function(arr) {
    if (arr.length < 3) return false

    let hasIncreased = false
    let hasDecreased = false

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[i-1]) {
            if (hasDecreased) return false
            hasIncreased = true
        } else if (arr[i] < arr[i-1]) {
            if (!hasIncreased) return false
            hasDecreased = true
        } else {
            return false
        }
    }

    return hasIncreased && hasDecreased
};
// The one below is like the third fastests and looks the most like what I was trying to do.
var validMountainArray = function(arr) {
    var i = 0;
    var N = arr.length;

    // walk up
    while(arr[i] < arr[i+1])
        i++;

    if(i === 0 || i === arr.length - 1)
        return false;

    // walk down
    while(arr[i] > arr[i+1])
        i++;

    return i == N - 1;
};