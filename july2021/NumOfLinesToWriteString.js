/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
 var numberOfLines = function(widths, s) {
    return [...s]
    .map(c => widths[c.charCodeAt(0) - 97])
    .reduce(
      (acc, curr) => [
        acc[0] + (100 < acc[1] + curr ? 1 : 0),
        100 < acc[1] + curr ? curr : acc[1] + curr,
      ],
      [s.length ? 1 : 0, 0],)
};
console.log(
    numberOfLines([10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10],  "abcdefghijklmnopqrstuvwxyz")
)