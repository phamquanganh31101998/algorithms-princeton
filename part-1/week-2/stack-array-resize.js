class Stack {
  arr = [];
  position = -1
  capacity = 1

  constructor() {
  }

  push(item) {
    // double size when stack is full
    if (this.position + 1 === this.capacity) {
      this.capacity = this.capacity * 2;
    }
    this.position += 1
    this.arr[this.position] = item
  }

  pop() {
    if (this.position === -1) throw new Error('Stack is empty')
    const item = this.arr[this.position]
    this.position -= 1

    // half size when stack is a quarter full
    if (this.position <= this.capacity / 4 && this.capacity > 1) {
      this.capacity = this.capacity / 2
    }

    return item
  }

  isEmpty() {
    return this.position === -1
  }

  size() {
    return this.position + 1
  }
}

function main() {
  const stack = new Stack();
  stack.push(1)
  stack.push(2)
  stack.push(3)
  stack.push(4)
  stack.push(5)

  console.log(stack.capacity)

  while (!stack.isEmpty()) {
    const item = stack.pop()
    console.log(item)
  }

  console.log(stack.capacity)
}

main()