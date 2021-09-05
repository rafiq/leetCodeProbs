/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
 var findAnagrams = function(s, p) {
    // let result = [];

    // let length = p.length;
    // let copyArray = s.slice().split("");
    // let firstLetter = p[0];

    // while (copyArray.indexOf(firstLetter) > 0) {
    //     let idx = copyArray.indexOf(firstLetter)

    //     let start = idx;
    //     let end = idx;

    //     for (start; start >= idx - length; ) {
    //         if ()
    //     }

    //     copyArray[copyArray.indexOf(firstLetter)] = "";
    // }

    // return


    // for (let i = 0; i < s.length; i++) {
    //     for (let j = i ; j < s.length; j++) {
    //         if (isAnagram(s.slice(i,j + 1),p)) {
    //             result.push(i);
    //         }
    //     }
    // }

    // return result;

    if(s.length < p.length) {
        return [];
    }
    const arr = Array(26).fill(0);
    const arrs = Array(26).fill(0);
    const base = 'a'.charCodeAt(0);
    for(let i = 0; i < p.length; i++) {
        const index = p.charCodeAt(i) - base;
        arr[index]++;
    }
    let result = [];
    for(let i = 0; i < s.length; i++) {
        const index = s.charCodeAt(i) - base;
        arrs[index]++;

        if(i >= p.length) {
            const index = i - p.length;
            arrs[s.charCodeAt(index) - base]--;
            console.log(index,arrs[s.charCodeAt(index) - base])
        }


        let diff = true;
        arr.forEach((v, i) => {
            if(arrs[i] !== v) {
                diff = false;
                return;
            }
        });
        if (diff) {
            result.push(i - p.length + 1);
        }

    }
    return result;
      // Time Complexity: O(n)
    // Space Complexity: O(n)
    // Category: Two Pointer
    /*
    Idea:
    1. Initialise two pointers l and r both pointing to zero and a map. Assign every letter in p to the map and record its frequencies as its value.
    2. Expand r pointer until I get a desirable window. If the desirable window's
    length is equal to the length of p, push the first index of the window to return array.
    3. Move l pointer ahead one by one until we no longer have a desirable window and once this happens go back to step 2 and repeat the process.
    */
};
function isAnagram(needle,haystack) {
    if (needle.length !== haystack.length) return false;
    let sortedNeedle = needle.split("").sort().join("");
    let sortedHaystack = haystack.split("").sort().join("");
    for (let i = 0; i < haystack.length; i++) {
        if (sortedNeedle[i] !== sortedHaystack[i]) return false;
    }
    return true;
}
    console.log(
        findAnagrams("cbaebabacd", "abc"),//[0,6]
        // findAnagrams("abab", "ab"),//[0,1,2]
        // findAnagrams("acdcaeccde"
        // ,"c"),//[1,3,6,7]
    )