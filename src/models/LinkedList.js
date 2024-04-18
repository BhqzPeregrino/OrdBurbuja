import { Node } from "./Node.js";

export class LinkedList {
  head;
  size;

  constructor() {
    this.head = null;
    this.size = 0;
  }

  push(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  shift() {
    if (!this.head) {
      return null;
    }
    const shiftedData = this.head.data;
    this.head = this.head.next;
    this.size--;
    return shiftedData;
  }

  getSize() {
    return this.size;
  }
}
