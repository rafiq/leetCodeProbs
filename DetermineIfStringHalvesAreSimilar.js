// You are given a string s of even length. Split this string into two halves of equal lengths, and let a be the first half and b be the second half.

// Two strings are alike if they have the same number of vowels ('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'). Notice that s contains uppercase and lowercase letters.

// Return true if a and b are alike. Otherwise, return false.

var halvesAreAlike = function(s) {
  let a = [];
  let b = [];
  let vowels = /aeiouAEIOU/g;
  let firstWordCount = [];
  let secondWordCount = [];

  a.concat(s.slice(0, s.length / 2));
  b.concat(s.slice(s.length / 2, s.length));

    console.log(a);
    console.log(b);

  // firstWordCount.push(a.match(vowels));
  // secondWordCount.push(b.match(vowels));

  // console.log(firstWordCount);
  // console.log(secondWordCount);
  // return (firstWordCount.length === secondWordCount.length) ? true : false;
};
console.log(halvesAreAlike("bopk"));


// The same number of vowels