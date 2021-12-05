
var Logger = function() {
    this.hash = {};
};

/**
 * @param {number} timestamp
 * @param {string} message
 * @return {boolean}
 */
Logger.prototype.shouldPrintMessage = function(timestamp, message) {

    if(
        (this.hash[message] !== undefined) &&
        (timestamp < this.hash[message] + 10)
    ) {
        return false;
       } else {
           this.hash[message] = timestamp;
            return true;
       }
    // if (!this.hash[message]) {
    //     this.hash[message] = timestamp + 10;
    // } else if (this.hash[message] >= timestamp) {
    //     return true;
    // } else {
    //     return false;
    // }
};

/**
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */