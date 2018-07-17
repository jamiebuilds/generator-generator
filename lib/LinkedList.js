'use strict';

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    let node = { value, next: null };
    if (this.tail) {
      this.tail.next = node;
      this.tail = node;
    } else {
      this.head = node;
      this.tail = this.head;
    }
  }

  shift() {
    let node = this.head;
    this.head = this.head.next;
    if (this.head && this.head.next) {
      this.tail = this.head.next;
    } else {
      this.tail = this.head;
    }
    return node.value;
  }

  concat(list) {
    if (list.head) {
      if (this.tail) {
        this.tail.next = list.head;
        this.tail = list.tail;
      } else {
        this.head = list.head;
        this.tail = list.tail;
      }
    }
    return this;
  }
}

module.exports = LinkedList;
