class Node {
  item;
  next;

  constructor(n) {
    this.item = n
    this.next = null
  }
}

class Deques {
  first = null;
  last = null;

  constructor() {
  }

  addFirst(item) {
    const newNode = new Node(item)
    if (this.isEmpty()) {
      this.first = newNode
      this.last = newNode
      return
    }

    const oldFirst = this.first
    this.first = newNode
    this.first.next = oldFirst
  }

  addLast(item) {
    const newNode = new Node(item)
    if (this.isEmpty()) {
      this.first = newNode
      this.last = newNode
      return
    }

    const oldLast = this.last
    this.last = newNode
    oldLast.next = this.last
  }

  removeFirst() {

  }

  removeLast() {

  }

  isEmpty() {
    return !this.first
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
  const deques = new Deques();
  deques.addFirst(1)
  deques.addFirst(2)
  deques.addFirst(3)
  deques.addLast(4)
  deques.addLast(5)

  // deques will be [3, 2, 1, 4, 5]
  console.log(deques.size())
  console.log(deques)
}

main()