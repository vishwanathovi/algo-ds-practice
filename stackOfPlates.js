class setOfStacks {
  constructor(stackLimit) {
    this.data = [[]];
    this.currentStackIndex = 0;
    this.stackLimit = stackLimit;
  }
  push(value) {
    let currentStackLength = this.data[this.currentStackIndex].length;
    if (currentStackLength < this.stackLimit) {
      this.data[this.currentStackIndex].push(value);
    } else {
      this.data[this.currentStackIndex + 1] = [];
      this.currentStackIndex++;
      this.data[this.currentStackIndex].push(value);
    }
  }
  pop() {
    let currentStackLength = this.data[this.currentStackIndex].length;

    if (currentStackLength) {
      return this.data[this.currentStackIndex].pop();
    }
    this.currentStackIndex--;
    return this.data[this.currentStackIndex].pop();
  }
  peek() {
    let currentStackLength = this.data[this.currentStackIndex].length;
    if (!currentStackLength) this.currentStackIndex--;
    currentStackLength = this.data[this.currentStackIndex].length;
    return this.data[this.currentStackIndex][currentStackLength - 1];
  }
  popAt(index) {
    let stackLength = this.data[index].length;
    if (!stackLength) return;
    return this.data[index].pop();
  }
}

let newSetOfStacks = new setOfStacks(3);

newSetOfStacks.push(10);
newSetOfStacks.push(20);
newSetOfStacks.push(30);
newSetOfStacks.push(40);
newSetOfStacks.push(50);
newSetOfStacks.push(60);
newSetOfStacks.push(70);
newSetOfStacks.push(80);
newSetOfStacks.push(90);
newSetOfStacks.pop();
console.log(newSetOfStacks.peek());
newSetOfStacks.pop();
console.log(newSetOfStacks.peek());
newSetOfStacks.pop();
console.log(newSetOfStacks.peek());
newSetOfStacks.pop();
console.log(newSetOfStacks.peek());
newSetOfStacks.pop();
newSetOfStacks.popAt(0);

console.table(newSetOfStacks.data);
