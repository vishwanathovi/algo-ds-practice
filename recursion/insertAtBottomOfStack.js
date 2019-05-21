// Stack class
class Stack {
  constructor() {
    this.data = [];
    this.length = 0;
  }

  push(item) {
    this.data.push(item);
    this.length++;
    return;
  }
  pop() {
    this.length--;
    return this.data.pop();
  }
  peek() {
    return this.data[this.length - 1];
  }
}

// Insert at bottom function
function insertAtBottomOfStack(stack, value) {
  // base case
  if (!stack.data.length) {
    stack.push(value);
    return;
  }
  // recursive case
  let currentElement = stack.pop();
  insertAtBottomOfStack(stack, value);
  return stack.push(currentElement);
}

let newStack = new Stack();
newStack.push(10);
newStack.push(20);
newStack.push(30);
newStack.push(40);
let downInsertedStack = insertAtBottomOfStack(newStack, 60);
console.log(newStack.data);
