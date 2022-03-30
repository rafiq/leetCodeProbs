/**
 * @param {number[][]} board
 * @return {number}
 */
 var snakesAndLadders = function(board) {

};
console.log(
    // snakesAndLadders()
);

function makeLogger(number) {
    return function() {
      console.log(number);
    }
  }

  function delayLog() {
    for (let index = 1; index <= 10; index += 1) {
      let logger = makeLogger(index);
      setTimeout(logger, index * 1000);
    }
  }
delayLog();