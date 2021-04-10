function infected(s) {
    let population = s.replace(/X/g,"") ? s.replace(/X/g,"").length : 0;
    let infectedPopulation = s.split("X").reduce((acc,curr) => {
        if (curr.includes("1")) acc += curr.length;
        return acc;
    },0)

    return infectedPopulation / population * 100 || 0 ;
  }
  console.log(
    infected("01000000X000X011X0X"),//73.33333333333333, EPSILON );
    infected("01X000X010X011XX"),//72.72727272727273, EPSILON );
    infected("XXXXX"),//0, EPSILON );
    infected("0000000010"),//100, EPSILON );
    infected("X00X000000X10X0100"),//42.857142857142854, EPSILON );
  )