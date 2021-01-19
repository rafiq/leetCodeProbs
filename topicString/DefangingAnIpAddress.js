/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    return address.replace(/\./g, "[.]")
};
// The fastest code used split and map which is interesting because I would have thought that those two would take more time than just the replace function. Shows that you just can't assume. I couple other built in methods can be faster than the one method you are using sometimes. I wonder where I could find out where you can check the speed of your code?
var defangIPaddr = function(address) {
    return address.split("").map(a=>{
       return a === "." ? "[.]": a
    }).join("")
};
console.log(defangIPaddr("1.1.1.1"));
console.log(defangIPaddr("255.100.50.0"));
// Given a valid (IPv4) IP address, return a defanged version of that IP address.

// A defanged IP address replaces every period "." with "[.]".