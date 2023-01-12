var numberToWords = function(num) {
    const ones = [
        '', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten',
        'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen',
        'Eighteen', 'Nineteen'
    ];
    const tens = ['', 'Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

    const classes = {
        'billion': ['Billion', 1000000000],
        'million': ['Million', 1000000],
        'thousand': ['Thousand', 1000],
        'hundred': ['Hundred', 100],
        'ten': ['Ten', 10],
        'one': ['One', 1]
    };

    const keys = Object.keys(classes);
    let str = '';

    // returns the resultant string
	function getWords(num) {
        let quotient = 0;
        for(let idx = 0; idx < keys.length; ++idx) {
            const key = keys[idx],
                  cls = classes[key];

			// loop over the classes to find the range in which the number falls
            if(num >= cls[1]) {
				// if the number is a double digit
                if(cls === 'ten') {
					// in the range 10-19
                    if(ones[num]) {
                        str += ones[num];
                    } else {                             // in the range 20-99
                        quotient = parseInt(num / cls[1]);
                        num = num % cls[1];
                        str += tens[quotient] + ' ' + ones[num];
                    }
                    return str;
                } else if(cls === 'one') {                // if the number is a single digit
                    str += ones[num];
                    return str;
                } else {                                  // if the number is more than 2 digits
                    quotient = parseInt(num / cls[1]);    // get the number for the class number - quotient
                    num = num % cls[1];                   // the remainder - say num=42.3M, the quotient will be 42 and remainder will be 300K
                    let word = getWords(quotient);       // get the string for the quotient (Forty Two)
                    str = word.trim() + ' ' + cls[0] + ' ';    // add class term after the string returned in the previous line (Forty Two Million)
                }
                break;                                     // break when the range is found and handled
            } else if(num === 0) {                         // if the number if 0
                return str;                                // return the string already formed
            }
        }
        return getWords(num);                            // recursively call the function for the remainder number (300K)
    }
    return num === 0 ? 'Zero' : getWords(num).trim();   // handled case: num = 0
};
const digits = ["","One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
    const tens = ["","Ten", "Twenty", "Thirty","Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
    const teens = ["","Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen","Eighteen","Nineteen"];
    const scale = ["", "Thousand", "Million", "Billion", "Trillion"];

var numberToWords = function(num) {

    //special condition for zero
    if(num === 0){
        return "Zero";
    }
    else{
        //divide the number in chunks of 3 digits
        let chunks = chunkArr(num,3);
        let answer = [];

        //process chunks 1 by 1, and append scale to it e.g. [123, 45] -> [12, 'thousand', 345]
        for(let i=0;i<chunks.length;i++){
            if(chunks[i] === 0)
               continue;

            if( scale[i]){
                 //answer.unshift(scale[i] , "and");
                 answer.unshift(scale[i]);
            }
            answer.unshift(chunks[i]);
        }

        //further convert the remaining numbers into words e.g. 12 -> tweleve, 345 -> three hundred forrty five
        for(let i=0; i<answer.length; i++){

                //don't process scale words e.g. thousand
                if(!Number.isInteger(answer[i])){
                    continue;
                }

                //find out hundreds
                let hundreds = Math.floor(answer[i]/100);
                let hundredRemainder = Math.floor(answer[i]%100);
                let words = "";

                //if the chunk is in hundred e.g. 345
                if(hundreds >= 1){
                    //convert 145 -> one hundred forty five
                    words = digits[hundreds] + " " + "Hundred" + " " + lessThanHundred(hundredRemainder);
                }else{
                    words = lessThanHundred(hundredRemainder);
                }
                //replace the number with words in array
                answer.splice(i,1, words.trim());
        }

        return answer.join(' ').trim(); //convert answer from arr -> string and join by space for better readibilty
    }
};

  function lessThanHundred(num){

        if(num === 0){
            return '';
        }if(num < 10){
            return digits[num];
        }else if(num > 10 && num < 20){
            return teens[Math.floor(num%10)];
        }else if(num === 10 || num >= 20){
            return (tens[Math.floor(num/10)] + " " + digits[Math.floor(num%10)]).trim();
        }
    }

    function chunkArr(num, size){
        let numArr = num.toString().split('');
        let chunks = [];

        // make sure number is divisible by the desired chunk size, until then keep adding zero 12 -> 012
        while(numArr.length % size !== 0){
            numArr.unshift(0);
        }

        //convert into number and create chunks of desired size
        for(let i=0; i<numArr.length; i=i+size){
            chunks.push(parseInt(numArr.slice(i,i+size).join('')));
        }
        //we need scale number in decending order same as our scale array
        return chunks.reverse();
    }