function calculate(str) {

    let result = 0;
    let numArray = str.match(/[0-9]+/g);
    result += +numArray.shift();
    return str.split('plus').join(' ')
                   .split('minus').join(" -").split(" ")

    // for (let i = 0; i < str.length; i++) {
    //     if (typeof +str[i] === "number" && str[i - 4] === "p") result += +numArray.shift();
    //     if (typeof +str[i] === "number" && str[i - 5] === "m") result -= +numArray.shift();
    // }

    // return result+""
    // return str.match(/[0-9]/g)//.forEach((el,idx) => {
        // combinedArray.push(el);
        // combinedArray.push(operationsArray[idx])
        // operationsArray[idx] ? combinedArray.push(operationsArray[idx]) : 0;
    // })
    // return `${3 operationMap["plus"] 2}`;
    }
    console.log(
        calculate("1plus2plus3plus4"),// '10');
        calculate('1minus2minus3minus4'),// '-8');
          calculate('1plus2plus3minus4'),// '2');
          calculate("82minus664minus935"),// '-1517'
    )

    // // This was a very nice way of doing this problem.
    // function calculate(str) {
    //     let numbers = str.split(/plus|minus/);
    //     let operations = str.match(/[a-z]+/g);
    //     let sum = parseInt(numbers[0]);
    //     for(let i = 0, len = operations.length; i < len; i++){
    //       switch(operations[i]){
    //         case "plus":
    //           sum += parseInt(numbers[i+1]);
    //           break;
    //         case "minus":
    //           sum -= parseInt(numbers[i+1]);
    //           break;
    //       }
    //     }
    //     return sum+"";
    //   }

    // //   I love the below solution which just split them, joined them, split them, joined them, and then calculated the resulting array using reduce which is the way I wanted to do this problem originally .
    // function calculate(str) {
    //     let result = '';

    //     result = str.split('plus').join(' ')
    //               .split('minus').join(' -')
    //               .split(' ').reduce((a,c)=> +a + +c)
    //     return result+'';
    //     }