class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // This should call update
  insert(newNode) {
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.size += 1;
  }

  // return value of node removed
  evict() {
    if (this.size === 0) return null;

    let nodeRemoved = this.head;
    this.size -= 1;
    if (this.head.next === null) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }

    return nodeRemoved.val;
  }

  // returns void
  update(node) {
    if (this.size === 0) return;

    if (node === this.tail) {
      return;
    }

    if (node === this.head) {
      this.head = this.head.next;
      this.tail.next = node;
      node.next = null;
    } else {
      node.prev = node.next;
      this.tail.next = node;
      node.next = null;
    }
  }
}

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.map = {};
  this.doubleLinkedList = new DoubleLinkedList();
  this.capacity = capacity;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (!(key in this.map)) {
    return -1;
  }
  const node = this.map[key];
  this.doubleLinkedList.update(node);
  return node.val;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (key in this.map) {
    this.map[key].val = value;
    this.doubleLinkedList.update(this.map[key]);
  } else {
    const newNode = new Node(value);
    if (this.doubleLinkedList.size === this.capacity) {
      const keyRemoved = this.doubleLinkedList.evict();
      delete this.map[keyRemoved];
    }
    this.doubleLinkedList.insert(newNode);
    this.map[key] = newNode;
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
