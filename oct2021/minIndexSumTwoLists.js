/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
 var findRestaurant = function(list1, list2) {
    let result = [];
    let hash = {};

    for (let i = 0; i < list1.length; i++) {
        if (list2.includes(list1[i])) {
            hash[list1[i]] = i + list2.indexOf(list1[i]);
        }
    }
    let foundIndexes = Object.values(hash).sort((a,b) => a[1] - b[1])
    let lowestIndex = Math.min(...foundIndexes);

    Object.entries(hash).forEach(el => {
        if (el[1] === lowestIndex) result.push(el[0]);
    })
    return result
        // return foundIndexes.filter(el => {
        //     if (el[1] <= lowestIndex) return el;
        // })


        // let map1 = new Map();

        // for (let i = 0; i < list1.length; i++) {
        //     map1.set(list1[i], i);
        // }

        // let result = [];
        // let min = Infinity;

        // for (let i = 0; i < list2.length; i++) {
        //     if (map1.has(list2[i])) {
        //         let sum = i + map1.get(list2[i]);
        //         if (sum < min) {
        //             result = [list2[i]];
        //             min = sum;
        //         } else if (sum === min) { I really like how they were able to smoothly code the logic of if there is a minimum, set it as the single one in the list, but if there is another with the same value, then push that onto the list.
        //             result.push(list2[i]);
        //         }
        //     }
        // }

        // return result;
};

console.log(
    // findRestaurant(["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]),//["shogun"];
    // findRestaurant(["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["KFC","Burger King","Tapioca Express","Shogun"]),
    // findRestaurant(["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["KNN","KFC","Burger King","Tapioca Express","Shogun"]),
    findRestaurant(["Shogun","Tapioca Express","Burger King","KFC"],
    ["KFC","Shogun","Burger King"]),//[shogun]
)