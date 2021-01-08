// You are given a string s of even length. Split this string into two halves of equal lengths, and let a be the first half and b be the second half.

// Two strings are alike if they have the same number of vowels ('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'). Notice that s contains uppercase and lowercase letters.

// Return true if a and b are alike. Otherwise, return false.


const halvesAreAlike = s => {
let count = 0;

for(i = 0; i < s.length / 2; i++) {
  count += s[i].isVowel();
  count -= s[(s.length / 2) + i].isVowel();
}
  return !count;

}

String.prototype.isVowel =function() {
  let letter = this.toLowerCase();
  return 'aeiou'.indexOf(letter) >= 0;
}

// fastest time Solution
// var halvesAreAlike = function(s) {
//    let arr = s.split('');

//     let n = s.length / 2;
//     let number1=0;
//     let number2=0;
// 	let vowel = ['a', 'i', 'e','o','u', 'A', 'E', 'I', 'O','U'];
//     for(let i = 0; i < n.length; i++){
//         for(let j =)
//         if(vowel.indexOf(arr[i]) > -1 )
//             number1++;
//         if(vowel.indexOf(arr[i]) > -1 )
//             number2++;
//     }

//     return (number1 == number2)
// let lenthOfStr = s.length;
// s = s.toLowerCase();
// let val = { a: "a", e: "e", i: "i", o: "o", u: "u" };
// let add = 0;
// for (let i = 0; i < lenthOfStr; i++) {
//  if (i < lenthOfStr / 2) {
//    if (val[s[i]]) {
//      add++;
//    }
//  } else {
//    if (val[s[i]]) {
//      add--;
//    }
//  }
// }
// if (add === 0) return true;

// return false;

// }



// My miserable attempt
// var halvesAreAlike = function(s) {
//   let a = [];
//   let b = [];
//   let vowels = /aeiouAEIOU/g;
//   let firstWordCount = [];
//   let secondWordCount = [];

//   a.concat(s.slice(0, s.length / 2));
//   b.concat(s.slice(s.length / 2, s.length));

//     console.log(a);
//     console.log(b);

//     var halvesAreAlike = function(s) {
//       let a = [];
//       let b = [];
//       let vowels = /aeiouAEIOU/g;
//       let firstWordCount = [];
//       let secondWordCount = [];

//       a.concat(s.slice(0, s.length / 2));
//       b.concat(s.slice(s.length / 2, s.length));

//         console.log(a);
//         console.log(b);
  // firstWordCount.push(a.match(vowels));
  // secondWordCount.push(b.match(vowels));

  // console.log(firstWordCount);
  // console.log(secondWordCount);
  // return (firstWordCount.length === secondWordCount.length) ? true : false;
};
console.log(halvesAreAlike("bopk"));


// The same number of vowels