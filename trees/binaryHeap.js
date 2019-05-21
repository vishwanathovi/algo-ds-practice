// define a binaryHeap class

// Create a node class
class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}
// Create a stack class
class Stack {
  constructor() {
    this.data = [];
    this.length = 0;
  }
  push(value) {
    this.data.push(value);
    this.length++;
    return this;
  }
  pop() {
    let temp = this.data.pop();
    this.length--;
    return temp;
  }
}

// Create a binary heap
class BinaryHeap {
  constructor() {
    this.root = null;
    this.length = 0;
    this.mapArray = [];
  }

  insert(value) {
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      let parentIndex = Math.floor((this.length + 1) / 2);
      let parentNode = this.mapArray[parentIndex];
      parentNode.left
        ? (parentNode.right = newNode)
        : (parentNode.left = newNode);
    }
    this.length++;
    this.mapArray[this.length] = newNode;

    // Move up as per requirement
    let parentIndex = Math.floor(this.length / 2);
    while (
      parentIndex > 0 &&
      this.mapArray[parentIndex].value > newNode.value
    ) {
      let temp = this.mapArray[parentIndex].value;
      this.mapArray[parentIndex].value = newNode.value;
      newNode.value = temp;
      newNode = this.mapArray[parentIndex];
      parentIndex = Math.floor(parentIndex / 2);
    }
    return;
  }
  findMin() {
    if (!this.root) return null;
    return this.root;
  }
  delMin() {
    // remove the this.length - 1 location element
    let parentIndex = Math.floor((this.length + 1) / 2);
    let nodeToReplace = this.mapArray.pop();
    let parentNode = this.mapArray[parentIndex];

    if (parentNode.left === nodeToReplace) {
      parentNode.left = null;
    } else {
      parentNode.right = null;
    }

    // replace the root value with the removed value

    // keep moving the value down as long as the value is greater than the children
  }
  isEmpty() {
    return !!this.length;
  }
  size() {
    return this.length;
  }
}

let newHeap = new BinaryHeap();
newHeap.insert(10);
newHeap.insert(20);
newHeap.insert(30);
newHeap.insert(40);
newHeap.insert(50);
newHeap.insert(5);

console.log(newHeap.root);
