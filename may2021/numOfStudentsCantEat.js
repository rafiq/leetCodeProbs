/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
 var countStudents = function(students, sandwiches) {
    // for (let i = 0; i < sandwiches.length; i++) {
    // let count = 101;
    while (students.length>0 && students.indexOf(sandwiches[0])!=-1) {
        if (students[0] !== sandwiches[0]) {
            students = toTheEndOfTheLine(students)
        } else {
            students.shift();
            sandwiches.shift();
        }
    }
    return students.length
};
function toTheEndOfTheLine(arr) {
    return arr.slice(1).concat(arr.slice(0,1))
}
console.log(
    countStudents([1,1,0,0], [0,1,0,1]),//0
    countStudents([1,1,1,0,0,1],[1,0,0,0,1,1]),//3
)

// ! very clever way of using a hash table as the stack and then just decrementing it when ever there is a match. Genius
var countStudents = function(students, sandwiches) {
    let memo ={}
    for(let i = 0; i < students.length; i++){
        memo[students[i]] = (memo[students[i]] || 0)+1;
    }
    while (memo[sandwiches [0]]>0){
        memo[sandwiches [0]]--
        sandwiches.shift()

    }
    return sandwiches.length;


};