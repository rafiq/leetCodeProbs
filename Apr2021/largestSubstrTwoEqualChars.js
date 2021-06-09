/**
 * @param {string} s
 * @return {number}
 */
 var maxLengthBetweenEqualCharacters = function(s) {
    let max = -1;

    for (let i = 0; i < s.length; i++) {
        if (s.indexOf(s[i]) !== s.lastIndexOf(s[i])) {
            if (max < (s.lastIndexOf(s[i]) - 1) - s.indexOf(s[i])) {
                max = s.lastIndexOf(s[i]) - 1 - s.indexOf(s[i])
            }
        }
    }
    return max;
};
// let set = new Set(s);

// if (set.size === s.length) return -1;
console.log(
    maxLengthBetweenEqualCharacters("abca"),//2;
    maxLengthBetweenEqualCharacters("cbzxy"),//-1
    maxLengthBetweenEqualCharacters("cabbac"),//4
    maxLengthBetweenEqualCharacters("aa"),//0
    maxLengthBetweenEqualCharacters("mgntdygtxrvxjnwksqhxuxtrv"),//18
)

var maxLengthBetweenEqualCharacters = function(s) {
    let maxSoFar = -1
    const map = {}

    for (let i = 0; i < s.length; i+=1) {
      if (map[s[i]] !== undefined) {
        maxSoFar = Math.max(maxSoFar, i - map[s[i]] - 1)
      } else {
        map[s[i]] = i
      }
    }

    return maxSoFar
  };