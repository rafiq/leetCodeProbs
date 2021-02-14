// Here is the fastest answer and it is sort of like my original answer in that I did want to have some logic where if not allowed, then continue. So this proves that I can use the break statement within a for loop and not just in a while loop. I was thinking of using the word continue, but that may only be for a while loop. This process just used a for loop to add each unique character to a new set and then did a double for loop in order to iterate over every letter of every word to check if that letter is part of the allowed characters and if the entire word is the same length as the word in the set. If they are, then the count increases by one. Otherwise, they skip the word.

var countConsistentStrings = function(allowed, words) {
    let allowedSet = new Set();
    let count = 0;

    for(let i=0; i<allowed.length; i++) {
      allowedSet.add(allowed[i]);
    }

    for(let i=0; i<words.length; i++) {
      for(let j=0; j<words[i].length; j++) {
        if(!allowedSet.has(words[i][j])) {
          break;
        } else if(j===words[i].length-1) {
          count++;
        }
      }
    }

    return count;
  };

//   The below answer is the second fastest and it is interesting because it makes a hash table with all the allowed characers(similar to a new Set) and it creates a count that is the length of the test string. Then it does a double for loop to look at each letter of the test string. If the letter is not in the set, then the counter is decremented, and the counter is returned at the end. This is an interesting solution because it is only subtracting if the letters are not there and it seems like that would miscount to me. I see said the blind man. The counter in the beginning is set to the length of the original array which is each word that we are checking which means that if the word has any unwanted letters, then the whole word is deleted from the count. Very cool. We could have used different logic to get the same result in the bottom if statement: if (!map[letter].includes(letter) which would mean they would both need to be either strings or arrays because I don't think you can check a string against an object, but maybe you can)
var countConsistentStrings = function(allowed, words) {
    var counter = words.length;
    var map = {};
    for (var i = 0; i < allowed.length; i ++) {
        map[allowed[i]] = i
    }
    for (var j = 0; j < words.length; j++) {
        var word = words[j]
        for (var k = 0; k < word.length; k++) {
            var letter = word[k]
            if (map[letter] == undefined) {
                counter--
                break;
            }
        }
    }
    return counter
};
// The answer below is the third fastest answer and they use a double for loop and a flag true / false in order to see if it is a letter and then they count increase if it is.
var countConsistentStrings = function(allowed, words) {
    var count = 0
    var allow = allowed.split('')
    for(let i=0;i<words.length;i++){
        let flag = false
        for(const c of words[i]){
            if(!allow.includes(c)){
                flag = true
                break
            }
        }
        if(flag) continue
        count += 1
    }
    return count
};