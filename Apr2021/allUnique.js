function isUnique(str) {
    // if (str.length === 0) return t;

    // for (let i = 0; i < str.length; i++) {
    //     if (str.indexOf(str[i]) !== str.lastIndexOf(str[i])) return false;
    // }
    // return true;

    let mapping = str.split("").reduce((acc,curr) => {
        acc[curr] ? acc[curr]++ : acc[curr] = 1;
        return acc;
    },{})

    return Object.values(mapping).every(el => el === 1)
}
console.log(isUnique("PrimeTime"))
console.log(isUnique(""))
console.log(isUnique("Time"))