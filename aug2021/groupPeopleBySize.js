/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
 var groupThePeople = function(groupSizes) {
    // let result = []
    // let temp = {}

    // for (let x of groupSizes) {

    //     if (temp[x] ===  ) {

    //     }
    // }

    // return groupSizes
       // track indices of groups
       var map = new Map()

       // return array
    //    var ret = []

    //    groupSizes.forEach( ( size, i ) => {
    //        if (

    //            // if we dont have an index for this size yet
    //            ! map.has( size )

    //            // or the given index already points to a full group
    //            || size === ret[ map.get( size ) ].length

    //        ) {

    //            // then create a new group
    //            map.set( size, ret.push([]) - 1 )

    //        }

    //        // push person to designated group
    //        ret[ map.get( size ) ].push( i )
    //    })

    //    return ret


    let indices = [], result = [];
    groupSizes.forEach((x, idx) => {
        if (indices[x]) indices[x].push(idx);
        else indices[x] = [idx];
        if (indices[x].length === x) {
            result.push(indices[x]);
            indices[x] = undefined;
        }
    });
    return result;
};
console.log(
    groupThePeople([3,3,3,3,3,1,3])
)