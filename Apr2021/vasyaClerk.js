function tickets(peopleInLine){
    let wallet = 0;

    for (let i = 0; i < peopleInLine.length; i++) {
        let curr = peopleInLine[i];
        if (curr === 25) wallet += curr;
        if (curr > 25) wallet = (wallet + 25) - (curr - 25);
        if (wallet < 0) return "NO" ;
        console.log(wallet)
    }
    return wallet >= 0 ? "YES" : "NO";
  }
  console.log(
    // tickets([25, 25, 50, 50]),// "YES");
    // tickets([25,25,25,100,25,25,50,100,25,50,25,100,25,25,25,100,25,25,25,100]),// "YES");
// tickets([25, 100]),// "NO");
tickets([ 25, 25, 25, 25, 25, 100, 100 ]),// "NO");
  )