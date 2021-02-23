// Again, I don't know why I keep on being amazed by the fastest answer being one that uses a for loop, but I am . I simly used for ...of and my result is slower though we did the same thing besides that.
var balancedStringSplit = function(s) {
    let counter = 0;
let res = 0;
// loop through string
for (let i = 0; i < s.length; i++) {
  //   if string index = R add to counter
  if (s[i] === 'R') {
    counter++;
    //   when index no longer = R subtract 1 from your counter
  } else {
    counter--;
  }
  // whenever your counter hits 0 in the loop add 1 to your result
  if (counter === 0) {
    res++;
  }
}

return res;
};

// Here one answer split kept counting the left and right substrings.
var balancedStringSplit = function(s) {


    let rCount = 0;
    let lCount  = 0;

    let result = 0;

    for(let i=0;i<s.length;i++) {
        // console.log(s.substring(i,i+1))
        if(s.substring(i,i+1)==='R') {
         rCount++;
        }
        if(s.substring(i,i+1)==='L') {
         lCount++;
        }
        // console.log(rCount)
        // console.log(lCount)

        if(rCount===lCount){
            result++;
            rCount = 0;
            lCount = 0;
        }
    }



    return result;

};
// object method. THis is interesting because they are creating a hash table and then just looking to see if the two sides are equal. I like how this one is concise and smooth. It just keeps incrementing the count when they are equal. for good.
var balancedStringSplit = function(s) {
    let map = {"R":0,"L":0};
     let count = 0;
     for(let i = 0; i < s.length; i++) {
       map[s[i]]++

         if(map['R'] === map['L'])count++
     }
     return count;
 };