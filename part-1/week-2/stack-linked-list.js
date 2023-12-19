class Node {
  item;
  next;

  constructor(n) {
    this.item = n
  }
}

class Stack {
  first = null;

  constructor() {
  }

  push(item) {
    const oldFirst = this.first
    this.first = new Node(item)
    this.first.next = oldFirst
  }

  pop() {
    const lastItem = this.first.item
    this.first = this.first.next
    return lastItem
  }

  isEmpty() {
    return this.first === null
  }

  size() {
    let size = 0
    let countPointer = this.first
    while(countPointer !== null) {
      size += 1
      countPointer = countPointer.next
    }
    return size
  }
}

function main() {
  const stack = new Stack();
  stack.push(1)
  stack.push(2)
  stack.push(3)
  stack.push(4)
  stack.push(5)

  console.log(stack.size())

  while (!stack.isEmpty()) {
    const item = stack.pop()
    console.log({item})
  }
}

main()