class Node {
  item;
  next;

  constructor(n) {
    this.item = n
  }
}

class Queue {
  first = null;
  last = null;

  constructor() {
  }

  enqueue(item) {
    const newNode = new Node(item)
    newNode.next = null

    // case insert new item to the empty queue
    if (this.first === null) {
      this.first = newNode
      this.last = newNode
      return
    }

    const oldLastItem = this.last
    this.last = newNode
    oldLastItem.next = this.last
  }

  dequeue() {
    if (this.first === null) throw new Error ('Queue is empty')

    const currentFirstItem = this.first
    this.first = this.first.next
    return currentFirstItem.item
  }

  isEmpty() {
    return this.first === null
  }

  size() {
    let size = 0
    let countPointer = this.first

    while(!!countPointer) {
      size += 1
      countPointer = countPointer.next
    }
    return size
  }
}

function main() {
  const queue = new Queue();
  queue.enqueue(1)
  queue.enqueue(2)
  queue.enqueue(3)

  console.log(queue.size())

  while (!queue.isEmpty()) {
    const item = queue.dequeue()
    console.log({item})
  }
}

main()