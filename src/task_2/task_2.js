// utils
const addItem = require("../utils/addItem");

/**
 * @desc An item in the list
 */
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

/**
 * @desc A doubly linked list
 */
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /**
   * @desc Adds a node to the list
   * @param {*} val
   */
  addNode(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  /**
   * @desc removes a node from the list
   */
  removeNode() {
    if (!this.head) {
      return undefined;
    }
    let deletedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = deletedNode.prev;
      this.tail.next = null;
    }
    this.length--;
    return deletedNode;
  }

  /**
   * @desc Gets the previous item for a node in the list
   * @param {string} val
   */
  getPrev(val) {
    let current = this.head;

    while (current) {
      if (this.head.val === val) {
        return null;
      }
      if (current.val === val) {
        return current.prev.val;
      }
      current = current.next;
    }
  }
}

/**
 * @desc
 * @param {array} arr 
 * @param {string} word 
 */
const checkPrev = (arr, word) => {
  const newList = new LinkedList(); // creates a new doubly linkedList
  addItem(arr, newList); // add nodes to the list;
  return newList.getPrev(word);
};

module.exports = checkPrev;