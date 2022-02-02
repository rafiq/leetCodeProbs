const { timeStamp } = require("console");

var HitCounter = function() {
    // let count = 0;
    // let timestamp = new Date()

    // return {


    //     count: 0

    // }
    this.timestamps = [];
    this.hits = [];
    this.populated_indexes = new Set();
};

/**
 * @param {number} timestamp
 * @return {void}
 */
HitCounter.prototype.hit = function(timestamp) {
    // let currentTime = timeStamp;
    // return currentTime;
    const index = timestamp % 300;
    this.hits[index] = this.timestamps[index] === timestamp ? this.hits[index] + 1 : 1;
    this.timestamps[index] = timestamp;
    this.populated_indexes.add(index);
};

/**
 * @param {number} timestamp
 * @return {number}
 */
HitCounter.prototype.getHits = function(timestamp) {
    // while (timeStamp < 300) {
    //     count++
    // }
    let result = 0;
    for (let index of this.populated_indexes) {
        if (timestamp - this.timestamps[index] < 300) result += this.hits[index];
    }

    return result;
};

/**
 * Your HitCounter object will be instantiated and called as such:
 * var obj = new HitCounter()
 * obj.hit(timestamp)
 * var param_2 = obj.getHits(timestamp)
 */
