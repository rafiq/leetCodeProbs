/**
 * @param {string} date
 * @return {string}
 */
 var reformatDate = function(date) {
    const MONTHS = {"Jan":"01", Feb:"02", Mar:"03", Apr:"04", May:"05", Jun:"06", Jul:"07", Aug:"08", Sep:"09", Oct:"10", Nov:"11", Dec:"12"}
    let result = [];
    let dateArray = date.split(" ").reverse();
    for (let i = 0; i < dateArray.length; i++) {
        if (i === 0) result.push(dateArray[i])
        if (i === 1) result.push(MONTHS[dateArray[i]])
        if (i === 2) result.push(leadingZeros(dateArray[i].replace(/[^0-9]/g,"")))
    }
    return result.join("-");
};
function leadingZeros(num) {
    return ("00" + num).slice(-2)
}
console.log(
    reformatDate("20th Oct 2052"),//"2052-10-20"
    reformatDate("6th Jun 1933"),//"1933-06-06"
)

// WHile my answer worked I did like the below answer which used destructuring for day month and year, and then returned those at the bottom. I also like how it dealt with the lack of leading zeros by creating the helper function that checks if the length of the day is less than, and if so, then it adds a zero using literal template notation. Still very similar to mine with the helper function and using the MONTHS const and using split. I do like how they were able to do it without using a for loop.
const Month = {
    Jan: '01', Feb: '02', Mar: '03', Apr: '04',
	May: '05', Jun: '06', Jul: '07', Aug: '08',
	Sep: '09', Oct: '10', Nov: '11', Dec: '12',
}

var reformatDate = function(date) {
   const [day, month, year] = date.split(' ');

    return `${year}-${Month[month]}-${formatDay(day.replace(/[^\d]+/, ''))}`
};

const formatDay = (day) =>
    day.length === 1 ? `0${day}` : day;