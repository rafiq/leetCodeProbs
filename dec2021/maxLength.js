/**
 * @param {string[]} arr
 * @return {number}
 */
 var maxLength = function(arr) {
    const isUnique = str => {
        for (let char of str) {
            if (str.indexOf(char) !== str.lastIndexOf(char)) return false
            console.log(char,str.indexOf(char));
        }
        return true;
    }

    let concat = arr.join("");
    // find dup
    // remove duplicate
    const removeDup = arr => {
        let result = []

        for (let i = 0; i < arr.length; i++) {
            let group = arr[i]
            for (let j = 0; j < arr.length; j++) {
                let char = group[i]
                for (let k = i + 1; k < arr.length; k++) {
                    let anotherGroup = arr[k];
                    if (anotherGroup.includes(char)) {
                        anotherGroup = ""
                        continue;
                    }
                }

            }
        }

        return arr
    }
    //
    return removeDup(arr)
};
console.log(
    maxLength(["cha","r","act","ers"])
);