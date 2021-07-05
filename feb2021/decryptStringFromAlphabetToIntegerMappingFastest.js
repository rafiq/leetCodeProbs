// Below is the fastest code, and it uses an object like I wanted to do. Genius! I love how they iterated through the string backwards which saves the hastle of looking for i+2 or the like.  I also love how they handled translating which is just a concatenated string and then decrementing by two clicks and then continuing. Very nice!
var freqAlphabets = function(s) {
    let obj = {
            '1': 'a',
            '2': 'b',
            '3': 'c',
            '4': 'd',
            '5': 'e',
            '6': 'f',
            '7': 'g',
            '8': 'h',
            '9': 'i',
            '10#': 'j',
            '11#': 'k',
            '12#': 'l',
            '13#': 'm',
            '14#': 'n',
            '15#': 'o',
            '16#': 'p',
            '17#': 'q',
            '18#': 'r',
            '19#': 's',
            '20#': 't',
            '21#': 'u',
            '22#': 'v',
            '23#': 'w',
            '24#': 'x',
            '25#': 'y',
            '26#': 'z'
        }
     let i = s.length - 1;
            let str = '';
            while (i >= 0) {
                if (s[i] === '#') {
                    str = obj[s[i - 2] + s[i - 1] + s[i]] + str;
                    i = i - 2;
                } else {
                    str = obj[s[i]] + str;
                }
                i--;
            }
            return str;
};

// The below is a one answer using an array of letters.
var freqAlphabets = function (s) {
var res = '';
var arr = ['0', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

for (var i = 0; i < s.length; i++) {
    if(i + 2 <s.length && s[i+2] =='#'){
        var str = s.slice(i,i+2);
        res += arr[parseInt(str)];
        i += 2;
    }else {
       var str = s[i];
       res += arr[parseInt(str)];
   }
}
return res;
}

// The below is the second fastest and it is pretty clever as well using regex and replace to do the job. I also like how they were able to use a dash so they don't have to mess with zero indexing.
var freqAlphabets = function(s) {
    let alphabet = '-abcdefghijklmnopqrstuvwxyz';
    for (let i=10; i<27; i++) {
      let c = `${i}#`;
      let r = new RegExp(c,'g');
      s = s.replace(r, alphabet[i]);
    }

    for (let i=1; i<11; i++) {
      let c = `${i}`;
      let r = new RegExp(c,'g');
      s = s.replace(r, alphabet[i]);
    }

    //console.log(s);

    return s;
  };
//   The below is one of the answer that I got from the you tube channel.
var freqAlphabets = function(s) {
    let res = ''
    for(let i=0;i<s.length;){
        let num;
        if(s[i+2]==='#'){
            num = +s.slice(i,i+2);
            i+=3;
        }else{
            num = +s.slice(i,i+1);
            i+=1;
        }
        res += String.fromCharCode('a'.charCodeAt(0)+num-1);
    }
    return res;
};

// This one below looks similar to mine and I think this is where my code broke down because of the i + 3 part . I was also missing the third part of the val.
var freqAlphabets = function(s) {
    let dect = {
         '1': 'a', '2': 'b', '3':'c', '4':'d', '5':'e', '6':'f', '7':'g', '8':'h', '9':'i', '10#':'j',
         '11#':'k', '12#':'l', '13#':'m', '14#':'n', '15#':'o', '16#':'p', '17#':'q', '18#':'r', '19#':'s',
         '20#':'t', '21#':'u', '22#':'v','23#':'w', '24#':'x', '25#':'y', '26#':'z'
     }
    let res= "";
     for(let i=0;i<s.length;){
         if(s[i+2] === "#"){
             let val = s[i]+s[i+1]+s[i+2]
             res += dect[val]
             i += 3;
         }
         else{
             res += dect[s[i]]
             i += 1;
         }
     }
     return res;

 };