class LRUCache {
    constructor(capacity) {
      this.capacity = capacity;
      this.map = new Map();
    }

    get(key) {
      if (!this.map.has(key)) return -1;
      const value = this.map.get(key);
      this.map.delete(key);
      this.map.set(key, value);
      return value;
    }

    put(key, value) {
      this.map.delete(key);
      this.map.set(key, value);
      if (this.map.size > this.capacity) this.map.delete(this.map.keys().next().value);
    }
  }





  var LRUCache = function(cap) {
    this.cap = cap;
    this.M = {};
    this.H = {};
    this.T = {};
    this.H.n = this.T;
    this.T.p = this.H;
    this.s = 0;
};

LRUCache.prototype.f = function(k, v) {
    if (this.M[k] !== undefined) {
        const p = this.M[k].p;
        const n = this.M[k].n;
        p.n = n;
        n.p = p;
    }
    const p = this.T.p;
    this.M[k] = { k, v, p, n: this.T };
    p.n = this.M[k];
    this.T.p = this.M[k];
}

LRUCache.prototype.get = function(k) {
    if (this.M[k] === undefined) return -1;
    this.f(k, this.M[k].v);
    return this.M[k].v;
};

LRUCache.prototype.put = function(k, v) {
    if (this.s === this.cap && this.M[k] === undefined) {
        delete this.M[this.H.n.k];
        this.H.n.p = undefined;
        this.H = this.H.n;
    } else if (this.M[k] === undefined) ++this.s;
    this.f(k, v);
};