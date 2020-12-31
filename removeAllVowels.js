let string = "Hello my name is node JS.";

let arr1 = string.split("");

console.log(arr1);

let vowels = /[aeiou]/gi;

let arr2 = string.match(vowels);

console.log(arr2);

let vowelLessArray = [];

for (i = 0; i < arr1.length; i++) {
  if (arr2.indexOf(arr1[i]) === -1) {
    vowelLessArray.push(arr1[i]);
  }

}

console.log(vowelLessArray);

let noVowelArray = vowelLessArray.join("");

console.log(noVowelArray);