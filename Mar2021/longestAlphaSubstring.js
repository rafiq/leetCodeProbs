function longest(str) {

    // return str.split("").reduce((acc,curr,idx) => {
    //     let accLastDigit = acc[acc.length - 1];
    //     let temp = "";
    //     let tempLastDigit = temp[temp.length - 1];
    //     if (idx === 0) acc += curr;
    //     if (curr < accLastDigit) acc = curr;
    //     if (curr === accLastDigit) {
    //         acc += curr;
    //         temp = "";
    //     }
    //     if (curr === tempLastDigit) temp += curr;
    //     if (curr !== tempLastDigit && curr > tempLastDigit) temp += curr;
    //     if (curr)


    //     return acc;
    var longestSub = "",
    length = 0,
    start = 0,
    prev = s[0];
for (var i = 1; i <= s.length; ++i) {
  if(i == s.length || s[i] < prev) {
    if(length < i-start) {
      longestSub = s.substring(start, i);
      length = i-start;
    }
    start = i;
  }
  prev = s[i];
};
return longestSub;
    // },"")
    let result = "";

    for (let i = 0; i < str.length - 1; i++) {

            if (str[i] < str[i + 1]) result += str[i]


    }

        return result;

  }
  console.log(
    longest( 'asd'),//as'),//
    longest('nab'),//ab'),//
    longest( 'abcdeapbcdef'),//abcde'),//
    longest( 'asdfaaaabbbbcttavvfffffdf'),//aaaabbbbctt'),//
    longest(  'asdfbyfgiklag'),//fgikl'),//
    longest( 'z'),//z'),//
    longest( 'zyba'),//z'])
  )