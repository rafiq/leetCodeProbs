var kClosest = function(points, k) {
    let sorted = points.map((p, idx) => {
        let dist = (p[0]**2 + p[1]**2)**0.5;
        return [dist, idx];
    });
    sorted.sort((a,b) => a[0] - b[0]);
    let res = [];
    for (let i = 0; i < k; i++) {
        let idx = sorted[i][1];
        res.push(points[idx]);
    }
    return res;
    // T.C: O(nlog(n))
    // S.C: O(n)
};

const partition = (dist, pivot) => {
    const small = [];
    const large = [];

    for (let i = 0; i < dist.length; i++) {
        if (i === pivot) continue;

        if (dist[i][0] > dist[pivot][0]) large.push(dist[i]);
        else if (dist[i][0] <= dist[pivot][0]) small.push(dist[i]);
    }

    return [small, large];
}


const findK = (dist, k) => {
    const pivot = Math.floor(dist.length / 2);
    const [small, large] = partition(dist, pivot);
    if (small.length === k-1) return [...small, dist[pivot]];
    else if (small.length > k-1) return findK(small, k);
    else return [...small, dist[pivot], ...findK(large, k-small.length-1)];
}



var kClosest = function(points, k) {
    const dist = [];
    for (let i = 0; i < points.length; i++) {
        const x = points[i][0];
        const y = points[i][1];
        const d = Math.sqrt(x*x + y*y);
        dist.push([d, i]);
    }
    const r = findK(dist, k);
    const result = [];
    for (let i = 0; i < r.length; i++) {
        result.push(points[r[i][1]]);
    }
    return result;
};
// ###################// ###################// ###################// ###################// ###################
var kClosest = function(points, K) {
    let heap = new maxHeap();

    for (let i = 0; i < K; i++) {
        heap.insert(points[i]);
    }
    for (let i = K; i < points.length; i++) {
        if (getDistance(points[i]) < getDistance(heap.getMax())) {
            heap.removeMax();
            heap.insert(points[i])
        }
    }
    return heap.heap.slice(0, heap.elements);
};

function getDistance(point) {
    return Math.pow(point[0], 2) + Math.pow(point[1], 2);
}

class maxHeap {
    constructor() {
        this.heap = [];
        this.elements = 0;
    }

    insert(point) {
        if (this.elements > this.heap.length) {
            this.heap.push(point);
        } else {
            this.heap[this.elements] = point;
        }
        this.elements += 1;
        this.shiftUp(this.elements-1);
    }

    shiftUp(index) {
        let parent = Math.floor((index-1)/2);
        if (index <= 0) {
            return;
        } else if (getDistance(this.heap[parent]) < getDistance(this.heap[index])) {
            let tmp = this.heap[parent];
            this.heap[parent] = this.heap[index];
            this.heap[index] = tmp;
            this.shiftUp(parent);
        }
    }

    heapify(index) {
        let left = 2*index + 1;
        let right = 2*index + 2;
        let largest = index;
        if (this.elements > left && getDistance(this.heap[left]) > getDistance(this.heap[largest])) {
            largest = left;
        }
        if (this.elements > right && getDistance(this.heap[right]) > getDistance(this.heap[largest])) {
            largest = right;
        }
        if (largest !== index) {
            let tmp = this.heap[largest];
            this.heap[largest] = this.heap[index];
            this.heap[index] = tmp;
            this.heapify(largest);
        }
    }

    getMax() {
        if (this.elements > 0) {
            return this.heap[0];
        }
        return null;
    }

    removeMax() {
        if (this.elements > 1) {
            let max = this.heap[0];
            this.heap[0] = this.heap[this.elements-1];
            this.elements -= 1;
            this.heapify(0);
            return max;
        } if (this.elements === 1 ) {
            this.elements = 0;
            return this.heap[0];
        } else {
            return null;
        }
    }
}