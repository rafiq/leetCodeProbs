
var UndergroundSystem = function() {

    this.INstations = {};
    this.OUTstations = {};
    this.INcount = {};
    this.OUTcount = {};
};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
    if (!this.INcount[stationName]) {
        this.INcount[stationName] = 1;
    } else {
        this.INcount[stationName] += 1;
    }


    if (!this.INstations[stationName]) {
        this.INstations[stationName] = [t];
    } else {
        this.INstations[stationName] += t;
    }
};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
    if (!this.OUTcount[stationName]) {
        this.OUTcount[stationName] = 1;
    } else {
        this.OUTcount[stationName] += 1;
    }

    if (!this.OUTstations[stationName]) {
        this.OUTstations[stationName] = t;
    } else {
        this.OUTstations[stationName] += t;
    }
};

/**
 * @param {string} startStation
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
    console.log(this.INcount[startStation]);
    console.log(this.OUTcount[endStation]);
    return (this.OUTstations[endStation] - this.INstations[startStation]) / Math.min(this.INcount[startStation], this.OUTcount[endStation]);
};

/**
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */
 var UndergroundSystem = function() {
    this.INstations = {};
    this.OUTstations = {};
    this.INcount = {};
    this.OUTcount = {};
};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function(id, stationName, t) {

    if (!this.INcount[stationName]) {
        this.INcount[stationName] = 1;
    } else {
        this.INcount[stationName] += 1;
    }


    if (!this.INstations[stationName]) {
        this.INstations[stationName] = [t];
    } else {
        this.INstations[stationName] += t;
    }
};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function(id, stationName, t) {

    if (!this.OUTcount[stationName]) {
        this.OUTcount[stationName] = 1;
    } else {
        this.OUTcount[stationName] += 1;
    }

    if (!this.OUTstations[stationName]) {
        this.OUTstations[stationName] = t;
    } else {
        this.OUTstations[stationName] += t;
    }
};

/**
 * @param {string} startStation
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
    console.log(this.INcount[startStation]);
    console.log(this.OUTcount[endStation]);
    return (this.OUTstations[endStation] - this.INstations[startStation]) / Math.min(this.INcount[startStation], this.OUTcount[endStation]);

};

class UndergroundSystem {
    #lastCheckIns = new Map();
    #journey2TotalDuration = new Map();

    checkIn(id, stationName, t) {
        this.#lastCheckIns.set(id, [stationName, t]);
    }

    checkOut(id, stationName, t) {
        const [from, since] = this.#lastCheckIns.get(id);
        this.#lastCheckIns.delete(id);
        const key = from + stationName;
        const [totalDuration, count] = this.#journey2TotalDuration.get(key) ?? [0, 0];
        this.#journey2TotalDuration.set(key, [totalDuration + t - since, count + 1]);
    }

    getAverageTime(startStation, endStation) {
        const [totalDuration, count] = this.#journey2TotalDuration.get(startStation + endStation);
        return totalDuration / count;
    }
}

var UndergroundSystem = function() {
    this.check = {};
    this.avg = {};
};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
    this.check[id] = [stationName,t];
};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
    let [station, startTime] = this.check[id];
    delete this.check[id];
    let key = station+'->'+stationName
    if(this.avg[key]){
        let [time, num] = this.avg[key];
        this.avg[key] = [((time*num)+(t-startTime))/(num+1),num+1];
        return;
    }
    this.avg[key] = [t-startTime,1];
};

/**
 * @param {string} startStation
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
    let key = startStation+'->'+endStation;
    return this.avg[key][0]
};