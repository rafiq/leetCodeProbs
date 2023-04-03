class TwoSum {
    constructor() {
        this.nums = new Map();
        this.size = 0;
    }

    add(n) {
        this.size++;
        let occur = this.nums.get(n) || 0;
        this.nums.set(n, ++occur);
    }

    find(value) {
        if (this.size < 2) { return false; }

        for (let [num, occur] of this.nums) {
            let missing = value - num;
            let occur = this.nums.get(missing) || 0;

            if ((missing === num && occur > 1) || (missing !== num && occur > 0)) {
                return true;
            }
        }

        return false;
    }
}

var TwoSum = function() {
    this.map = new Map();
};

TwoSum.prototype.add = function(number) {
    this.map.set(number, (this.map.get(number) || 0) + 1);
};

TwoSum.prototype.find = function(value) {
    for (const key of this.map.keys()) {
        const val = parseInt(key);
        const toFind = value - val;
        if (this.map.has(toFind)) {
            if (val !== toFind) {
                return true;
            } else if (this.map.get(toFind) > 1) {
                return true;
            }
        }
    }
    return false;
};