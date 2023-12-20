class Stack {
  arr = [];
  position = -1
  capacity = 0

  constructor(c) {
    this.capacity = c
  }

  push(item) {
    if (this.position + 1 === this.capacity) throw new Error('Stack is full')
    this.position += 1
    this.arr[this.position] = item
  }

  pop() {
    if (this.position === -1) throw new Error('Stack is empty')
    const item = this.arr[this.position]
    this.position -= 1
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
  const stack = new Stack(3);
  stack.push(1)
  stack.push(2)
  stack.push(3)

  while (!stack.isEmpty()) {
    const item = stack.pop()
    console.log(item)
  }
}

main()