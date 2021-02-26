// This is the fastest code and it is first checking if they are the same lenght which is a great idea. Then they make a hash array with 26 elements all set to zero. They run a while loop that iterates over the first word and adds the letter to the hash array and then subtracts the letter from the hash array if it is in the second string. Lastly, it iterates through that array looking to find any letters not set to zero which would mean they were in one string and not the other.

var isAnagram = function(s, t) {
	if (s.length !== t.length) return false;

	let hash = new Array(26).fill(0);
	let i = 0;

	while (i < s.length) {
		hash[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
		hash[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
		i++;
	}

	let j = 0;

	while (j < hash.length) {
		if (hash[j] !== 0) return false;
		j++;
	}

	return true;
};

// Below is the way that I wanted to solve this problem which is to create a hash table and upload every letter from each word into it and if they are in the table the increment them one time. Finally, just iterate through the values of one object and compare them to the values in the other object and your able to see if they have the same number of letters in each word.
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    var x = {}, y = {};
    // This was really smooth how they used ternary operator to get this going. I would not have guessed that you would need to create two hash tables, but that makes sense since you are trying to compare two different words and you are not sure they have the same number of letters. I would think that you could have done some stack type of method as well where you just add up the number of letters in one word and then subtract them when iterating over the other word, and if any letters were not zero then it should return false.
    for (i = 0; i < s.length; ++i) {
        var a = s[i], b = t[i];
        x[a] ? x[a]++ : x[a] = 1;
        y[b] ? y[b]++ : y[b] = 1;
    }

    for (var z in x) {
        if (x[z] !== y[z]) {
            return false;
        }
    }
    return true;
};
// Below looks like the way I wanted to answer this as well. YES! This is how I would have like to solve this problem. To basically create a hash table from one word which would add up the all the letters, then run through the second word and see if any of the letters are not in the hash table, or they are not the same number count.
let isAnagram = function(s, t) {
    if (s.length !== t.length) {
      return false;
    }

    let letterCount = {};

    for (let letter of s) {
      if (letterCount[letter]) {
        letterCount[letter]++;
      } else {
        letterCount[letter] = 1;
      }
    }

    for (let letter of t) {
      if (letterCount[letter] === undefined) {
        return false;
      }

      if (letterCount[letter] < 1) {
        return false;
      }

      letterCount[letter]--;
    }

    return true;
  };

  // /**
  //  * @param {string} s
  //  * @param {string} t
  //  * @return {boolean}
  //  */
  // // O(s | t) time
  // // O(s | t) space
  // var isAnagram = function(s, t) {
  //     if (s.length !== t.length) {
  //         return false;
  //     }

  //     let mapS = new Map();
  //     let mapT = new Map();

  //     for (let i = 0; i < s.length; i++) {
  //         if (mapS.has(s[i])) {
  //             let temp = mapS.get(s[i]);
  //             temp.push(i);
  //             mapS.set(s[i], temp);
  //         } else {
  //             mapS.set(s[i], [i]);
  //         }
  //     }

  //     // console.log("mapS: ", mapS);

  //     for (let i = 0; i < t.length; i++) {
  //         if (mapT.has(t[i])) {
  //             let temp = mapT.get(t[i]);
  //             temp.push(i);
  //             mapT.set(t[i], temp);
  //         } else {
  //             mapT.set(t[i], [i]);
  //         }
  //     }
  //     // console.log("mapT: ", mapT);
  //     if (mapS.size !== mapT.size) {
  //         return false;
  //     }
  //     let sKeys = mapS.keys();
  //     for (let i = 0; i < mapS.size; i++) {
  //         let key = sKeys.next().value;
  //         if (!mapT.has(key) || mapS.get(key).length !== mapT.get(key).length) {
  //             return false;
  //         }
  //     }

  //     return true;
  // };