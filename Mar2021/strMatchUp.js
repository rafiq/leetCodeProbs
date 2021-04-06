function solve(a,b){
    // return b.map(el => a.join("").match(new RegExp(el),"g") ? a.join("").match(new RegExp(el),"g").length : 0 );
    let el = "abc"
    return a.join(" ").match(new RegExp(el,"g")) ? a.join(" ").match(new RegExp(el,"g")).length : 0;
  }
  console.log(
    solve(['abc', 'abc','xyz','abcd','cde'], ['abc', 'cde', 'uap']),// [2, 1, 0]);
    solve(['abc', 'xyz','abc', 'xyz','cde'], ['abc', 'cde', 'xyz']),// [2, 1, 2]);
    solve(['quick', 'brown', 'fox', 'is', 'quick'], ['quick', 'abc', 'fox']),// [2, 0, 1]);
  )