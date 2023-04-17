const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  constructor() {
    this.a = null;
    this.b = null;
  }

  getUnderlyingList() {
    return this.a;
  }

  enqueue(value) {
    const ln = new ListNode(value);
    
    if (!this.a) {
      this.a = ln;
    } else {
      this.b.next = ln;
    }

    this.b = ln; 
  }

  dequeue() {
    if (!this.a) 
      return null;
    let ret = this.a.value;

    this.a = this.a.next;
    return ret; 
  }
}

module.exports = {
  Queue
};
