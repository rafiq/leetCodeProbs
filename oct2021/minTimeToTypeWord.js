/**
 * @param {string} word
 * @return {number}
 *
 *
 * how do I quanitify the alphabet
 */
 var minTimeToType = function(word) {
    //  const ALPHA = "abcdefghijklmnopqrstuvwxyz";
    // let len = ALPHA.length - 1;

    //  console.log(ALPHA.charCodeAt(25))
    // console.log(len)
    // let sum = 23 % len;
    //  console.log(sum)
    let curr = 'a', res = 0

    for (let i = 0; i < word.length; i++) {
      const move = Math.abs(word.charCodeAt(i) - curr.charCodeAt(0))
      console.log(move)
      if (move) res += Math.min(move, 26 - move)

      curr = word[i]
      res++
    }
    return res
};
console.log(
    minTimeToType("abc"),//5
    minTimeToType("wa"),//7
)