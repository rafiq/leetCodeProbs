function howManyStep(a,b){
    let count = 0;

    while (a * 2 < b - 1 || b / 2 === a) {
        a *= 2;
        count++;
    }

    while (a < b)  {
        a += 1;
        count++
    }

    return count;
  }
  console.log(
    howManyStep(1,10),// 4)
    howManyStep(1,17),// 5)
    howManyStep(1,64),// 6)
    howManyStep(1,63),// 10)
    howManyStep(50,100),// 1)
    howManyStep(51,100),// 49)
    howManyStep(100,100),// 0)
  )

  function howManyStep(a,b){
    let res = 0;
     while(a < b){
      b % 2 === 0 && b / 2 >= a ? b /= 2 : b--;
      res++;
    }
    return res;
  }