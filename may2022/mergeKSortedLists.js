var mergeKLists = function(lists) {
    if(lists.length===0)return null;
    return lists.reduce(mergeTwoLists);
};

function mergeTwoLists(l1, l2) {
    let l3 = new ListNode();
    let curr = l3;

    while(l1&&l2) {
        if(l1.val < l2.val) {
          curr.next = l1
          l1 = l1.next;
        } else {
          curr.next = l2
          l2 = l2.next;
        }
        curr = curr.next;
      }

      curr.next = l1 || l2;
      return l3.next
};

var mergeKLists = function(lists) {
    if (lists.length == 0) return null;
    let newHead = new ListNode();
    let cur = newHead;
    while (true) {
        let minIdx = null;
        for (let i = 0; i < lists.length; i++) {
            if (lists[i] && (minIdx == null || lists[i].val < lists[minIdx].val)) {
                minIdx = i;
            }
        }
        if (minIdx == null) break; // there is no more node to traverse
        cur.next = lists[minIdx];
        cur = cur.next;
        lists[minIdx] = lists[minIdx].next;
    }
    return newHead.next;
    // Time Complexity: O(k * N), N = the number of all nodes | every selection of one node costs O(k)
    // Space Complexity: O(1)
};

/*
1. Create a new head node.
2. Scan through the heads of every list and find the head with the smallest value.
3. Append this node to our list. We advance pointer of our list by one.
We advance the head with the smallest value by one as well.
4. Repeat 1,2,3 until there is no more node to traverse.
*/


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
 var mergeKLists = function(lists)
 {
         const {MinPriorityQueue} = require('@datastructures-js/priority-queue');

         let pq = new MinPriorityQueue(), pos = [];
         for(let i=0; i<lists.length; i++)
         {
                 if(lists[i])
                         pq.enqueue(i, lists[i].val);
                 pos.push(lists[i]);
         }

         let list = new ListNode(), listEnd = list;
         while(!pq.isEmpty())
         {
                 let {element} = pq.dequeue();
                 listEnd.next = pos[element];
                 pos[element] = pos[element].next;
                 listEnd.next.next = null;
                 listEnd = listEnd.next;
                 if(pos[element] !== null)
                         pq.enqueue(element, pos[element].val);
         }

         return list.next;
 };


class MinHeap{
    constructor(){
        this.heap = [];
    }
    getParentIndex(i){
        return (i - 1) >> 1;
    }
    getLeftIndex(i){
        return i * 2 + 1;
    }
    getRightIndex(i){
        return i * 2 + 2;
    }
    swap(i1, i2){
        const temp = this.heap[i1];
        this.heap[i1] = this.heap[i2];
        this.heap[i2] = temp;
    }

    shiftUp(index){
        if(index === 0) return ;
        const parentIndex = this.getParentIndex(index);
        if(this.heap[parentIndex] && this.heap[parentIndex].val > this.heap[index].val ){
            this.swap(parentIndex, index);
            this.shiftUp(parentIndex);
        }
    }
    shifDown(index){
        const leftIndex = this.getLeftIndex(index);
        const rightIndex = this.getRightIndex(index);
        if(this.heap[leftIndex] && this.heap[leftIndex].val  < this.heap[index].val ){
            this.swap(leftIndex, index);
            this.shifDown(leftIndex);
        }
        if(this.heap[rightIndex] && this.heap[rightIndex].val  < this.heap[index].val ){
            this.swap(rightIndex, index);
            this.shifDown(rightIndex);
        }
    }
    insert(value){
        this.heap.push(value);
        this.shiftUp(this.heap.length - 1);
    }

    pop(){
        if(this.size() === 1) return this.heap.shift();
        const top = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.shifDown(0);
        return top;
    }
    peek(){
        return this.heap[0];
    }
    size(){
        return this.heap.length;
    }
}


var mergeKLists = function(lists) {
    const res = new ListNode(0);
    const h = new MinHeap();
    let p = res;
    lists.forEach(l => {
        if(l) h.insert(l);
    });
    while(h.size()){
        const n = h.pop();
        p.next = n;
        p = p.next;
        if(n.next) h.insert(n.next);
    }
    return res.next;
};