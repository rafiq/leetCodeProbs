/**
 * @param {number} n
 * @return {number}
 */
 var countLargestGroup = function(n) {
    let result = {};

    for (let i = 1; i <= n; i++) {
        if (result[getSumofDigits(i)]) result[getSumofDigits(i)].push(i);
        else result[getSumofDigits(i)] = [getSumofDigits(i)];
    }
    let maxLength = Math.max(...Object.values(result).map(el => el.length))

    return Object.values(result).filter(el => {
        return el.length === maxLength;
    }).length;
};
function getSumofDigits(num) {
    return num.toString().split("").reduce((acc,curr) => acc + +curr,0)
}
console.log(
    countLargestGroup(13),//4
// ! Good second fastest answer below which uses calculations to get the sum of digits as opposed to a bunch of chained methods and then they also just made the sum of digits the key and the number of times it shows up in the array as the value and that means they don't have to deal with getting the length of each array.
var countLargestGroup = function(n) {
    let m = new Map(), max = 0;
    let ans = 0;
    for (let i = 1; i <= n; i++) {
        let sum = addDigits(i);
        m.set(sum, m.get(sum)+1 || 1);
        if(max==m.get(sum)){
            ans++;
        }else if(max<m.get(sum)){
            max = Math.max(max, m.get(sum));
            ans =1
        }
    }
    return ans
//     let map = new Map();
//     let max = 0;
//     let ans = 0;

//     for(let i = 1;i<=n;i++){
//         let sum = addDigits(i);
//         if(!map.has(sum)){
//             map.set(sum, new Set());
//         }
//         map.set(sum, map.get(sum).add(i) );
        if(max==map.get(sum).size){
            ans++;
        }else if(max<map.get(sum).size){
            max = Math.max(map.get(sum).size)
            ans =1
        }
//     }
//     return ans
};

var addDigits = (num)=>{
    let sum = 0;
    while(num>0){
        sum+=(num%10);
        num=Math.floor(num/10);
    }

    return sum
}
// ! I like how the below method used very simlpe for loops to do the same as me above
var countLargestGroup = function(n) {
    let sums_dict = {};

    for (let i = 1; i <= n; i++) {
        // Get the digits and sum of the digits for the integers 1 to n
        let digits = i.toString().split('');
        let sum_digits = 0;
        for (let j = 0; j < digits.length; j++) {
            sum_digits += parseInt(digits[j]);
        }

        if (! sums_dict[sum_digits]) {
            sums_dict[sum_digits] = 1;
        } else {
            sums_dict[sum_digits] += 1;
        }
    }

    let counts = Object.values(sums_dict).sort(function(a, b) {return (b - a)});
    let largest_size = counts[0];
    let largest_size_count = 1;
    for (let i = 1; i < counts.length; i++) {
        if (largest_size === counts[i]) {
            largest_size_count++;
        } else {
            break;
        }
    }

    return largest_size_count;
};