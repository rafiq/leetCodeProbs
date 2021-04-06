
function sumOfABeach(beach) {


    let sandCount = beach.toLowerCase().match(/sand/gi) ? beach.toLowerCase().match(/sand/gi).length : 0;
    let waterCount = beach.toLowerCase().match(/water/gi) ? beach.toLowerCase().match(/water/gi).length : 0;
    let fishCount = beach.toLowerCase().match(/fish/gi) ? beach.toLowerCase().match(/fish/gi).length : 0;
    let sunCount = beach.toLowerCase().match(/sun/gi) ? beach.toLowerCase().match(/sun/gi).length : 0;
    return sandCount + fishCount + waterCount + sunCount;
    // return sunCount;

  }
  console.log(
    sumOfABeach("SanD"),// 1);
    sumOfABeach("sunshine"),//1);
    sumOfABeach("sunsunsunsun"),//4);
    sumOfABeach("123FISH321"),//1);)
  )

//   Now that is what I am talking about. Lets make this coding easier by finding these shortcuts to writing code.
const sumOfABeach = beach => (beach.match(/sand|water|fish|sun/ig) || []).length