if(arr.length==1) return 1;
arr.push(arr[arr.length-1]);

let max = 0;
let sign=0;
let prevSign=0;
let index=0;

for(let i=0;i<arr.length - 1;i++) {
  sign= Math.sign(arr[i]-arr[i+1]);

  if(sign!=-prevSign) {
    max = Math.max(max, i - index + 1);
    index = i;
    prevSign=0;
  }
  prevSign=sign;
}
return max;


if (!arr || !arr.length) { return 0; }
if (arr.length === 1) { return 1; }

let nowOdd = false, oddBiggerLen = 1, nowEven = true, evenBiggerLen = 1, longest = 1;

for (let i = 1; i < arr.length; i++) {

    if ((i - 1) % 2 === 0) {
        evenBiggerLen = nowEven && arr[i] < arr[i - 1] ? evenBiggerLen + 1 : 1;
        oddBiggerLen = !nowOdd && arr[i] > arr[i - 1] ? oddBiggerLen + 1: 1;
    }
    else {
        evenBiggerLen = !nowEven && arr[i] > arr[i - 1] ? evenBiggerLen + 1 : 1;
        oddBiggerLen = nowOdd && arr[i] < arr[i - 1] ? oddBiggerLen + 1: 1;
    }

    nowEven = !nowEven;
    nowOdd = !nowOdd;
    longest = Math.max(longest, oddBiggerLen, evenBiggerLen);
}

return longest;