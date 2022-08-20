/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     @return {void}
 *     this.setInteger = function(value) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     @return {void}
 *     this.add = function(elem) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @param {NestedInteger[]} nestedList
 * @return {number}
 */
 var depthSumInverse = function(nestedList) {
    let depth = 1;
    let maxDepth;
    let result = []

    for (let el of nestedList) {
        if (el.isInteger) {
            let curr = (maxDepth - depth) + 1
            result.push([curr,depth])
        } else {
            DFS(el, depth + 1)
        }
    }

    const DFS = (node, depth) => {
        if (node.getList === null) {
            return depth
        } else {
            DFS(node.getList, depth + 1)
        }
    }
    return result.reduce((acc,curr) => {
        acc += curr[0] * curr[1]
        return acc
    },0)
};



/**
 * @param {NestedInteger[]} nestedList
 * @return {number}
 */
 var depthSumInverse = function(nestedList) {
    let maxDepth = getMaxDepth(nestedList);
    return listSum(nestedList, maxDepth);
    // T.C: O(N), N = # of all items
    // S.C: O(maxDepth)
};

function listSum(list, maxDepth, depth=1) {
    let sum = 0;
    for (let i = 0; i < list.length; i++) {
        if (list[i].isInteger()) {
            sum += list[i].getInteger() * (maxDepth - depth + 1);
        } else {
            sum += listSum(list[i].getList(), maxDepth, depth + 1);
        }
    }
    return sum;
}

function getMaxDepth(list, depth=1) {
    let maxDepth = depth;
    for (let i = 0; i < list.length; i++) {
        if (!list[i].isInteger()) {
            maxDepth = Math.max(maxDepth, getMaxDepth(list[i].getList(), depth+1));
        }
    }
    return maxDepth;
}



var depthSumInverse = function(nestedList) {
    let maxDept = 0;
    const recurse = (list,dept=0)=>{
        let arr = [];
        maxDept = Math.max(maxDept,dept);
        for(let ele of list){
            if(ele.isInteger()){
                arr.push([ele.getInteger(), dept]);
            }else{
                let val = recurse(ele.getList(),dept+1);
                arr = [...arr, ...val];
            }
        }
        return arr;
    }
    let arr = recurse(nestedList,1);
    let returnVal = 0;
    for(let ele of arr){
        returnVal += ((maxDept - ele[1] + 1)*ele[0])
    }
    return returnVal;
};


// IMPORTANT: All code must be in this file or it will not be submitted

// Sample Test Case
// JavaScript only supports strings as keys in Objects, so we represent the input in this way
const sample = { "A,B,C": 4, "B,C,A": 3, "C,B,A": 2 };

// you can convert back and forth between this and an Array as follows:
console.log("A,B,C".split(","))
console.log(["A", "B", "C"].join(","))

// Determine plurality winner (Part 1)
console.log("The plurality winner is: " + getPluralityWinner(sample));
// TODO: add additional test cases for Part 1 here
console.log(
    "\n A => 3 way Ties", getPluralityWinner({ "A,B,C": 4, "B,C,A": 4, "C,B,A": 4, "A,b":2 }),
    "\n2 A => way Ties", getPluralityWinner({ "A,B,C": 4, "B,C,A": 4, "C,B,A": 1 }),
    "\nBig numbers", getPluralityWinner({ "A,B,C": 1000, "B,C,A": 1000, "C,B,A": 4000 }),
    "\nsingle voters", getPluralityWinner({ "C": 10, "B,C": 9, "A": 10 }),
    "\nNew candidates", getPluralityWinner({ "D": 1, "A": 2 }),
    "\n A => lower case letters are NOT the same as uppercase letters", getPluralityWinner({ "a": 5, "A": 2, "b": 7 ,"A,B":3}),
    "\n 1 => numbers are valid candidates", getPluralityWinner({ "1": 5, "2": 2 }),
    "\nbA => longer than one character", getPluralityWinner({ "bA": 3, "3": 2 }),
    "\n 1 => Numbers before letters in tie", getPluralityWinner({ "1": 3, "A": 3 }),
    "\n A => capitals before lowercase in tie", getPluralityWinner({ "a": 3, "A": 3 }),
)

// Determine ranked choice winner (Part 2)
console.log("The ranked choice winner is: " + getRankedChoiceWinner(sample));
// TODO: add additional test cases for Part 2 here

//implement this method for Part 1
function getPluralityWinner(ballots) {

    let firstPlaceVotesObj = getFirstPlaceVotes(ballots);

    return Object.entries(firstPlaceVotesObj).sort((a, b) => {
        if (b[0] - a[0]) {
            return -1
        }
        if (b[0] === a[0]) {
            return b[1] - a[1]
        }
    })
}
function getFirstPlaceVotes(ballots) {
    let firstPlaceVotes = {};

    Object.keys(ballots).forEach(vote => {
        let votesArray = vote.split(",")

        for (let i = 0; i < votesArray.length; i++) {
            if (i === 0) {
                firstPlaceVotes[votesArray[i]] ? firstPlaceVotes[votesArray[i]] += ballots[vote] : firstPlaceVotes[votesArray[i]] = ballots[vote]
            } else if (firstPlaceVotes[votesArray[i]] !== firstPlaceVotes[votesArray[0]]) {
                // if it is not the first place, then give it a score of zero
                firstPlaceVotes[votesArray[i]] = 0
            }
        }
    });

    return firstPlaceVotes;
}
//implement this method for Part 2
function getRankedChoiceWinner(ballots) {
    return "";
}
