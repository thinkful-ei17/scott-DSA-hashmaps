'use strict';

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    }
    else {
      let current = this.head;

      while (current.next !== null) {
        current = current.next;
      }
      current.next = new _Node(item, null);
    }
  }

  insertBefore(key, newValue) {
    if (!this.head) {
      return null;
    }

    if (this.head.value.key === key) {
      this.insertFirst(newValue);
      return;
    }

    let current = this.head;
    let previous = this.head;


    while (current !== null) {

      if (current.value,key === key) {
        previous.next = new _Node(newValue, current);
        return;
      }
      previous = current;
      current = current.next;
    }

    console.log('Item to insert before was not found');
    return;
  }

  insertAfter(match, newValue) {
    if (!this.head) {
      return null;
    }

    let current = this.head;

    while (current !== null) {
      if (current.value === match) {
        const tempNext = current.next;
        current.next = new _Node(newValue, tempNext);
        return;
      }
      current = current.next;
    }

    console.log('Item to insert after was not found');
    return;
  }

  insertAt(position, newValue) {
    if (!this.head) {
      return null;
    }

    if (position === 0) {
      this.insertFirst(newValue);
      return;
    }

    let counter = 0;
    let current = this.head;
    let previous = this.head;

    while (current !== null) {
      if (counter === position) {
        previous.next = new _Node(newValue, current);
        return;
      }
      previous = current;
      current = current.next;
      counter++;
    }
    console.log('Position was invalid');
    return;
  }

  find(item) {
    let current = this.head;

    if (!this.head) {
      return null;
    }

    while (current.next !== null) {

      if (current.value.key === item) {
        return current.value.value;
      }
      current = current.next;
    }
    return null;
  }

  remove(item) {
    if (!this.head) {
      return null;
    }

    if (this.head.value.key === item) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    let previous = this.head;

    while (current !== null) {

      if (current.value.key === item) {
        previous.next = current.next;
        return;
      }

      previous = current;
      current = current.next;
    }

    console.log('Item not found');
    return;
  }

  printList() {
    if (!this.head) {
      return null;
    }
    let current = this.head;
    while (current !== null) {
      console.log(current.value);
      current = current.next;
    }
    return;
  }

}

class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

module.exports = LinkedList;