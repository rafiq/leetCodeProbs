function longestWord(stringOfWords){
    let strArray = stringOfWords.split(" ")
    let max = 0;
    let maxStr = "";
    for (let i = strArray.length - 1; i >= 0; i--) {
        if (strArray[i].length > max) {
            max = strArray[i].length;
            maxStr = strArray[i];
        }
    }
    return maxStr
  }
  console.log(
    longestWord('a b c d e fgh'),// "fgh" );
    longestWord('one two three'),// "three" );
    longestWord('red blue grey'),// "grey" );
    longestWord("forward", "each", "step", "going"),// "forward" );
  )