// Here is the fastest answer and it is pretty similar to mine except for using forEach and then pushing each element into another elements and joining it at the end.

var reverseWords = function (s) {
    let ans = [];
    let temp = s.split(" ");
    temp.forEach((e) => ans.push([...e].reverse().join("")));


    return (ans.join(" "));
  };

// The next fastest answer uses a for loop to reverse each word.
var reverseWords = function(s) {
    var arr = s.split(" ");
    console.log(arr);
    for(var i = 0; i < arr.length; i++){
        arr[i] = arr[i].split("").reverse().join('');
    }
    s = arr.join(' ').toString();
    return s;
};
