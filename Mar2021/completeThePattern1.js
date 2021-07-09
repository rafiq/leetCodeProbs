function pattern(n){
    if (n < 0) return "";
    return Array.from(new Array(n), (x, i) => i + 1).reduce((acc,curr,idx,arr) => {
        acc += String(curr).repeat(idx + 1) + "\n";

        return acc;
    },"").slice(0,-1);
   }
   console.log(
    pattern(1),//"1");
    pattern(2),//"1\n22");
    pattern(5),//"1\n22\n333\n4444\n55555");
    pattern(-25),//
   )