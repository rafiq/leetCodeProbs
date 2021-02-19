// I think the fastest code below is very slick. It taught me something about getting letters from the alphabet or just taking the charCodeAt and subtracting from 97 which must be another way to get the index of a letter if it were in an array in alphabetical order. It is smooth how it just uses a double for loop to first look at each word, then each letter of that word and then gets the alphabetic index of that letter. Matches that to the morse code array and then pushes it to a new array. After it does that for the previous word, it adds the joined string of that word to the new Set and then continues until the end of the word.
/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    const morseArr = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];

    const set = new Set();
    for (let i = 0; i < words.length; i++) {
      let wordsArr = [];
      for (let j = 0; j < words[i].length; j++) {
        wordsArr.push(morseArr[(words[i].charCodeAt(j)) - 97])
      }
        set.add(wordsArr.join(""));
    }
    return set.size;
  };


// Though my code below was in the fastest group the code above was the example code given.


const MORSE_CODE = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var uniqueMorseRepresentations = function(words) {
    let representations = new Set();

    for (let word of words) {
        representations.add(convertToMorse(word))
    }
    return representations.size;
}

function convertToMorse(word) {
    return word.split("").reduce((acc,curr) => {
        acc += (MORSE_CODE[alphabet.indexOf(curr)])
        return acc;
    },"")
}
console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]));

// Below is the second fastest answer and it is pretty smooth as well. I like how it fit it into almost one line of code. It did have to create a hash table with the key values of letters to code which would have taken quite a bit of some time. Correction: I just did it using a for loop and it didn't take too much time. But I had to create an array of letters, and then do that for loop.
var uniqueMorseRepresentations = function(words) {

    const alphabet = {
    a: '.-', b: '-...',   c: '-.-.', d: '-..', e: '.', f: '..-.', g: '--.', h: '....', i: '..',  j: '.---',  k: '-.-',  l: '.-..', m: '--',
    n: '-.',  o: '---', p: '.--.',  q: '--.-',  r: '.-.', s: '...', t: '-', u: '..-', v: '...-', w: '.--', x: '-..-',  y: '-.--', z: '--..'
}

        return new Set(words.map(word => word.split('').map(letter => alphabet[letter]).join(''))).size
};