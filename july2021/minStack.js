/**
 * initialize your data structure here.
 */
 var MinStack = function() {

    this.stack = []

};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {

    this.stack.push(val)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1]
};



/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    let min = this.stack[0]
    let curr

    for (let i = 0; i < this.stack.length; i++) {
        curr = this.stack[i]

        if (curr < min) min = curr
    }

    return min

};
var obj = new MinStack()
 obj.push(5)
 obj.push(5)
 obj.push(1)
 obj.push(2)
 console.log(obj.top())
 obj.pop()
 console.log(obj.getMin())
 console.log(obj.stack)
  var param_3 = obj.top()
  var param_4 = obj.getMin()
 console.log(param_3,param_4)
/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */


// ! While my answer worked it was really slow and looking at the second fastest answer below I think that they just created two stacks in order to pop from the shorter one faster. I assume that is faster than just using the built in method pop and push() though they use push(*0) twice in their push method.
function last(arr) {
    return arr[arr.length - 1];
}

class MinStack {
    _stack = [];
    _minStack = [];

    push(x) {
        this._stack.push(x);
        if (this._minStack.length === 0 || x <= last(this._minStack)) {
            this._minStack.push(x);
        }
    }

    pop() {
        if (last(this._minStack) === last(this._stack)) {
            this._minStack.pop();
        }
        this._stack.pop();
    }

    top() {
        return last(this._stack);
    }

    getMin() {
        return last(this._minStack);
    }
}