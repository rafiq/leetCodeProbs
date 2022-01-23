/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */
 var daysBetweenDates = function(date1, date2) {

    const MILLISECONDSINADAY = 1000*60*60*24;
    return Math.abs((new Date(date1).getTime() - new Date(date2).getTime()) / MILLISECONDSINADAY);
    // return new Date(Date.parse(date2) - Date.parse(date1));
};
console.log(
    daysBetweenDates("2019-06-29", date2 = "2019-06-30")
);