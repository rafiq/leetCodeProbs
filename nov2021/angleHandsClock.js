/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
 var angleClock = function(hour, minutes) {
    let hourAngle = (hour % 12)  * 30 + minutes * 0.5;
    let minuteAngle = minutes * 6;

    let angle1 = Math.abs(hourAngle - minuteAngle);
    let angle2 = 360 - angle1;

    return Math.min(angle1, angle2);
};
console.log(
    angleClock()
);