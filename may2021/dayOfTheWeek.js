/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
 var dayOfTheWeek = function(day, month, year) {

    let dayMapping = {
        0:"Sunday",1:"Monday",2:"Tuesday",3:"Wednesday",4:"Thursday",5:"Friday",6:"Saturday"
    }
    let date = new Date( month + "." + day + "." + year);

    return dayMapping[date.getDay()]
};
console.log(
    dayOfTheWeek(31, 8,  2019),
    dayOfTheWeek(18,  7, 1999)
)

// This makes sense since the number of the months is off, but why not do it for the days of the week as well?
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
var dayOfTheWeek = function(day, month, year) {
    const date = new Date(year, month - 1, day);
    return days[date.getDay()];
};